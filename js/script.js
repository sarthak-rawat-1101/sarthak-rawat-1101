function letItBeSeen(id) {
    document.getElementById('home').style.display = "none";
    document.getElementById('edu').style.display = "none";
    document.getElementById('contact').style.display = "none";
    document.getElementById(id).style.display = "initial";
}

function getDivType1(url, pic_src, disc) {
    div = document.createElement("div");
    div.innerHTML = `<div class="flex-box-type1-img"><img src="${pic_src}" alt="Img"></div><div class="flex-box-type1-disc">${disc}</div>`;
    div.className = "flex-type1";
    div.addEventListener("click", () => {
        console.log("Ohaiyo!!");
        window.open(url, '_blank');
    });
    div.addEventListener("mouseover", function () {
        console.log("Maosu!!");
        this.style.color = "red";
    });

    div.addEventListener("mouseout", function () {
        console.log("Maosu outo!!");
        this.style.color = "white";
    });

    return div;
}

window.onload = () => {

    home_disc = `Hello Everyone!! <br>
        My name is Sarthak Rawat. <br>
        I am currently enrolled in an Mtech programme in IIIT-H. <br>
        In this page I have put some of the things that interest me the most. <br>
        This is my first attempt in creating a "proper" webpage. I have always avoided creating frontend, I hope I get better in this and enjoy the process XD.  
         
    `;
    project0_disc = `Chord is a protocol and algorithm for a peer-to-peer distributed hash table. A distributed hash table stores key-value pairs by assigning keys to different computers (known as \"nodes\"); a node will store the values for all the keys for which it is responsible. Chord specifies how keys are assigned to nodes, and how a node can discover the value for a given key by first locating the node responsible for that key. <br> Click to see my attempt to create a P2P network.`;
    project1_disc = `This is a simulator for the 8085 microprocessor. <br> Click to see my github repo.`;
    anime_disc = `As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the school, he is singled out and blamed for everything done to her. With Shouko transferring out of the school, Shouya is left at the mercy of his classmates. He is heartlessly ostracized all throughout elementary and middle school, while teachers turn a blind eye. Now in his third year of high school, Shouya is still plagued by his wrongdoings as a young boy. Sincerely regretting his past actions, he sets out on a journey of redemption: to meet Shouko once more and make amends. Koe no Katachi tells the heartwarming tale of Shouya's reunion with Shouko and his honest attempts to redeem himself, all while being continually haunted by the shadows of his past.`;
    movie_disc = `In 1954, up-and-coming U.S. marshal Teddy Daniels is assigned to investigate the disappearance of a patient from Boston's Shutter Island Ashecliffe Hospital. He's been pushing for an assignment on the island for personal reasons, but before long he thinks he's been brought there as part of a twisted plot by hospital doctors whose radical treatments range from unethical to illegal to downright sinister. Teddy's shrewd investigating skills soon provide a promising lead, but the hospital refuses him access to records he suspects would break the case wide open. As a hurricane cuts off communication with the mainland, more dangerous criminals "escape" in the confusion, and the puzzling, improbable clues multiply, Teddy begins to doubt everything - his memory, his partner, even his own sanity.`;
    tv_disc = `Patrick Jane is a crime consultant with the California Bureau of Investigation. He has a particular gift for astute observation and reading people, honed through years of being a faux psychic. His gift makes him brilliant at solving murders, which is why the CBI have him around. However, his motive for taking on the role is purely one of revenge: find and kill the man who killed his wife and daughter - Red John.`;
    yt_disc = `YT Channel Recommendations`;

    project0_url = `https://github.com/srtkRWT/CHORD/`;
    project1_url = `https://github.com/srtkRWT/8085-microProcessor-simulator`;
    anime_url = `https://myanimelist.net/anime/28851/koe_no_katachi`;
    movie_url = `https://www.imdb.com/title/tt1130884/`;
    tv_url = `https://www.imdb.com/title/tt1196946/`;
    yt_url = `https://docs.google.com/document/d/e/2PACX-1vQRfKZ5KicGyx4ujvW6Qley37unDNCs-e52CXF9scjNisyc34xldm17KIBKD3nISTMdWIxkyxy-lhYm/pub`;

    project0_img = `https://upload.wikimedia.org/wikipedia/commons/2/20/Chord_network.png`;
    project1_img = `https://i2.wp.com/www.bragitoff.com/wp-content/uploads/2014/11/intel-8085-microprocessor-kit.jpg`;
    anime_img = `https://cdn.myanimelist.net/images/anime/1122/96435.jpg`;
    movie_img = `https://image.tmdb.org/t/p/original/pOI1vG75ZL6EGyk9qeDP6HPkFt6.jpg`;
    tv_img = `https://images-na.ssl-images-amazon.com/images/S/pv-target-images/853774b486dcf07a65e94ec5859681705bb0f31ecefea447b5c6681f1e9e0dec._RI_V_TTW_.jpg`;
    yt_img = `https://cdn.vox-cdn.com/thumbor/5mNn_NtJ5PsaOo7mFc99GLVjaUA=/0x0:960x960/1200x800/filters:focal(394x401:546x553)/cdn.vox-cdn.com/uploads/chorus_image/image/54135085/14915318_10155148305236754_7471955098066766739_n.0.png`;




    home_div = document.getElementById("home");

    home_div.appendChild(getDivType1("#", "res/images/profile_picture.png", home_disc));

    home_div.appendChild(document.createElement("br"));
    home_div.appendChild(document.createElement("br"));
    home_div.appendChild(document.createElement("br"));
    h2 = document.createElement("h2");
    home_div.appendChild(h2);
    h2.innerHTML = "Some Interesting Things";

    home_div.appendChild(getDivType1(project0_url, project0_img, project0_disc));
    home_div.appendChild(getDivType1(project1_url, project1_img, project1_disc));
    home_div.appendChild(getDivType1(anime_url, anime_img, anime_disc));
    home_div.appendChild(getDivType1(movie_url, movie_img, movie_disc));
    home_div.appendChild(getDivType1(tv_url, tv_img, tv_disc));
    home_div.appendChild(getDivType1(yt_url, yt_img, yt_disc));


    clock = document.getElementById("clock");
    clock.innerHTML = new Date();
    setInterval(() => {
        clock.innerHTML = new Date();
    }, 1000);




};
