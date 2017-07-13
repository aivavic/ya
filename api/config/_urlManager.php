<?php
//die('_urlManager');
return [
    'class'           => 'yii\web\UrlManager',
    'enablePrettyUrl' => true,
    'showScriptName'  => false,
    'rules'           => [
//        ['pattern'=>'article/index', 'route'=>'article/index'],
        ['class' => 'yii\rest\UrlRule', 'controller' => 'article', 'only' => ['index', 'view', 'options']],

        ['pattern' => 'sitemap', 'route' => 'sitemap/default/index', 'suffix' => '.xml'],
    ]
];
