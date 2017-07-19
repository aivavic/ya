<?php
use yii\helpers\Html;
/* @var $this \yii\web\View */
/* @var $content string */

//\frontend\assets\FrontendAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?php echo Yii::$app->language ?>">
<head>
    <meta charset="<?php echo Yii::$app->charset ?>"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href=/static/css/app.3e1f231097faf6114e07edd6ff737d5f.css rel=stylesheet>
    <?php echo Html::csrfMetaTags() ?>
</head>
<body>
<?php $this->beginBody() ?>
    <?php echo $content ?>
<?php $this->endBody() ?>
<script type=text/javascript src=/static/js/manifest.2760b008491c37b2f8d2.js></script>
<script type=text/javascript src=/static/js/vendor.fa3f6dccf32d91a88829.js></script>
<script type=text/javascript src=/static/js/app.22c41ccb7109eae92d30.js></script
</body>
</html>
<?php $this->endPage() ?>
