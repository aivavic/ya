<?php

namespace api\models;

use yii\helpers\Url;
use yii\web\Linkable;
use yii\web\Link;

/**
 * @author Eugene Terentev <eugene@terentev.net>
 */
class Article extends \common\models\Article implements Linkable
{
    public function fields()
    {
        return ['id', 'slug', 'title'];
    }

//    public function extraFields()
//    {
//        return ['category', 'categories', 'localeGroupPages'];
//    }



    /**
     * Returns a list of links.
     *
     * @return array the links
     */
    public function getLinks()
    {
        return [
            Link::REL_SELF => Url::to(['article/view', 'id' => $this->id], true)
        ];
    }
}
