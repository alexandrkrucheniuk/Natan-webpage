<!doctype html>
<html lang="en">
<head>
    <title>[[*pagetitle]] - [[++site_name]]</title>
    <base href="[[!++site_url]]" />
    <meta charset="[[++modx_charset]]" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="stylesheet" href="./assets/css/styles.css">
</head>
<body>
    <div class="container_fix">
        [[$header]]
    </div>

    <div class="portfolio__divider"></div>
    <div class="portfolio">
        [[!getResources? &parents=`[[*id]]` &tpl=`portfolio-item` &processTV=`1` &field=`view-work_image` ]]
    </div>
    <div class="portfolio__divider" style="margin-top: 100px"></div>

    <div class="container_fix">
        [[$footer]]
    </div>
</body>
</html>