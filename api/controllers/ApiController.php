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
class ApiController extends ActiveController
{
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
        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::className(),
            'cors' => [
                'Origin' => static::allowedDomains(),
                'Access-Control-Request-Method' => ['GET', 'POST'],
                'Access-Control-Allow-Credentials' => true,
                'Access-Control-Request-Headers' => ['Origin', 'Content-Type', 'X-Auth-Token' , 'Authorization'],
                'Access-Control-Allow-Headers' =>   ['Authorization'],
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

}
