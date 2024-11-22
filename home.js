function getNewsSectionFormatted(results, section) {
    var newsInSection = results.filter((article) => article.section == section);

    var formattedNews = newsInSection.map((article) => 
        ({
            url: article.url,
            title: article.title,
            abstract: article.abstract,
            imageUrl: article.media[0] && article.media[0]['media-metadata'][0] ? article.media[0]['media-metadata'][0].url : null
        }));

    return formattedNews;
}

function insertArticleBoxInSection(article, section) {
    sectionInHTML = document.getElementById(section);

    // Test et format i html der ser fint ud
    // husk klasser for formatering
    sectionInHTML.innerHTML += `
        <a href=${article.url}>
            <img src=${article.imageUrl} />
            <div>
                <h3>${article.title}</h3>
                <div>${article.abstract}</div>
            </div>
        </div>
    `;
}

function insertSection(sectionName) {
    container = document.getElementById('sectionContainer');

    container.innerHTML += `
        <h2>${sectionName}</h2>
        <div class=${sectionName}>

        </div>
    `;
}