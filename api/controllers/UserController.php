<?php

namespace api\controllers;

use common\models\forms\SignupForm;
use common\models\User;
use yii\filters\auth\CompositeAuth;
use yii\filters\auth\HttpBasicAuth;
use yii\filters\auth\HttpBearerAuth;
use yii\filters\auth\QueryParamAuth;
use yii\helpers\VarDumper;
use yii\rest\ActiveController;
use Yii;
use yii\web\Response;

/**
 * @author Eugene Terentev <eugene@terentev.net>
 */
class UserController extends ActiveController
{
    /**
     * @var string
     */
    public $modelClass = 'api\models\User';

    /**
     * @return array
     */
    public function behaviors()
    {
        $behaviors = parent::behaviors();

        $behaviors['authenticator'] = [
            'class' => CompositeAuth::className(),
            'authMethods' => [
                [
                    'class' => HttpBasicAuth::className(),
                    'auth' => function ($username, $password) {
                        $user = User::findByLogin($username);
                        return $user->validatePassword($password)
                            ? $user
                            : null;
                    }
                ],
                HttpBearerAuth::className(),
                QueryParamAuth::className()
            ]
        ];
        $behaviors['authenticator']['except'] = ['sign-up', 'sign-in'];
        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::className(),
            'cors' => [
                'Origin' => static::allowedDomains(),
                'Access-Control-Request-Method' => ['POST'],
                'Access-Control-Allow-Credentials' => true,
                'Access-Control-Max-Age' => 3600,                 // Cache (seconds)
            ],
        ];
        return $behaviors;
    }

    public static function allowedDomains()
    {
        return [
            // '*',                        // star allows all domains
            'http://localhost:8080',
            'http://develop.yan.yii',
        ];
    }

    /**
     * @inheritdoc
     */
    public function actions()
    {
        return [
            'index' => [
                'class' => 'yii\rest\IndexAction',
                'modelClass' => $this->modelClass
            ],
            'view' => [
                'class' => 'yii\rest\ViewAction',
                'modelClass' => $this->modelClass,
                'findModel' => [$this, 'findModel']
            ],
            'options' => [
                'class' => 'yii\rest\OptionsAction'
            ]
        ];
    }

    public function actionSignIn()
    {
        $data = Yii::$app->request->post('data');
        Yii::$app->response->format = Response::FORMAT_JSON;
        parse_str(urldecode(base64_decode($data, true)), $output);
        $user = User::findOne(['email' => $output['email']]);
        if (!$user || !$user->validatePassword($output['password'])) {
            return false;
        } else {
            return $user->findIdentityByAccessToken($user->access_token);

        }


    }

    public function actionSignUp()
    {
        $post = Yii::$app->request->post('data');
        parse_str(urldecode(base64_decode($post, true)), $data);

        $model = new SignupForm();
        $model->username = $data['username'];
        $model->email = $data['email'];
        $model->password = $data['pwd'];
        if ($model->validate()) {
            $user = $model->signup();
            if ($user) {
                if ($model->shouldBeActivated()) {
                    return $model;
                } else {
                    return $model;
                }
//                return $this->goHome();
            }
        } else {
            return $model->errors;
        }


    }
}
