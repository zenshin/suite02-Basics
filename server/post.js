var xhr = new XMLHttpRequest();

if (xhr) {

    xhr.open('POST', 'http://192.168.23.96:3000/posts');
    xhr.setRequestHeader('Content-Type',
        'application/json; charset=utf-8');

    var article = JSON.stringify({
        author: 'Thomas',
        title: 'industrialisation de la Lune',
        content: 'Jacques Cheminade veut collaborer avec les puissances spatiales et surtout éviter que la France ne se laisse distancer dans ce domaine. Bien évidemment, observer et sonder l’espace avec nos robots et nos satellites ne suffira pas. Il faudra y aller nous-mêmes, aller y voir de nos propres yeux, assure-t-il. Outre la planète Mars, la Lune est dans sa ligne de mire, puisqu’il veut y implanter des centres industriels et scientifiques. En tout cas, si Cheminade est élu, un ministère dédié à l’espace sera créé.',
        tags: 'hardware/recyclage/utile/HDD'
    });
    alert(JSON.stringify(article));
    xhr.send(article);

}
