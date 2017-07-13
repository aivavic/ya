<?php

namespace api\controllers\db;

use Yii;
use api\models\AboutPage;
use yii\data\ActiveDataProvider;
use yii\rest\ActiveController;
use yii\web\ForbiddenHttpException;
use yii\web\HttpException;

/**
 * Class AboutPageController
 * @author Eugene Terentev <eugene@terentev.net>
 */
class AboutPageController extends ActiveController
{
    /**
     * @var string
     */
    public $modelClass = 'api\models\AboutPage';

    /**
     * @var array
     */
    public $serializer = [
        'class'              => 'yii\rest\Serializer',
        'collectionEnvelope' => 'items'
    ];

    /**
     * @inheritdoc
     */
    public function actions()
    {
        return [
            'index'   => [
                'class'               => 'yii\rest\IndexAction',
                'modelClass'          => $this->modelClass,
                'prepareDataProvider' => [$this, 'prepareDataProvider']
            ],
            'view'    => [
                'class'      => 'yii\rest\ViewAction',
                'modelClass' => $this->modelClass,
                'findModel'  => [$this, 'findModel']
            ],
            'options' => [
                'class' => 'yii\rest\OptionsAction'
            ]
        ];
    }

    /**
     * @return ActiveDataProvider
     */
    public function prepareDataProvider()
    {        
        $onlyCategory   = Yii::$app->request->get('category_id');
        $where          = Yii::$app->request->get('where', []);
        $whereOperatorFormat = Yii::$app->request->get('where_operator_format', []);
 
        return new ActiveDataProvider(array(
            'query'      => AboutPage::find()
                ->published()        
                ->onlyCategory($onlyCategory)
                ->andFilterWhere($where)
                ->andFilterWhere($whereOperatorFormat)
        ));
    }

    /**
     * @param $id
     * @return array|null|\yii\db\ActiveRecord
     * @throws HttpException
     */
    public function findModel($id)
    {
        $model = AboutPage::find()
            ->published()
            ->andWhere(['id' => (int) $id])
            ->one();
        if (!$model) {
            throw new HttpException(404);
        }        
        return $model;
    }
}