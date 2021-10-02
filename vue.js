const posts= [
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Spaghetti_aglio%2C_olio_e_peperoncino_%2816284859030%29.jpg',
        name: 'Pasta',
        des: 'Healthy Pasta'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Jacques_Lameloise%2C_escab%C3%A8che_d%27%C3%A9crevisses_sur_gaspacho_d%27asperge_et_cresson.jpg',
        name: 'Red Crab',
        des: 'Fresh from Alaska'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Breakfast_at_Irving_Street_Kitchen.jpg',
        name: 'Breakfast Special',
        des: 'Good for the soul'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Seafood_linguine.jpg',
        name: 'Sea Shells Mix',
        des: 'for the shell lovers'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Various_kebab.jpg',
        name: 'Ultimate Kebab',
        des: 'The best from Middle East'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Chicken_steak_with_pepper_sauce.jpg',
        name: 'Chicken Steak',
        des: 'Grilled to perfection'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/.Filet_mignon_et_foie_gras_au_muscat_de_Beaumes-de-Venise%2C_Pastis_Bistro%2C_Palo_Alto.jpg',
        name: 'Filet Mignon',
        des: 'Juicy steak swerved with potatos au grutin'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dishes_at_Bistro_C%2C_Hastings_Street%2C_Noosa_Heads%2C_Queensland_02.jpg',
        name: 'Bistro Brunch',
        des: 'A touch of Australia'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/3/32/2011-04-09_17.02.43%2C_Whispers_Cafe_and_Creperie%2C_Belmont%2C_CA_%285982715933%29.jpg',
        name: 'California Crepe',
        des: 'Suffed with grilled shrimp'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Hamburguesa_de_carne.jpg',
        name: 'Top Burger',
        des: 'The  tallest hamburger from Peru'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Round_Table_chicken_%26_garlic_pizza.JPG',
        name: 'Chicken Garlic Pizza',
        des: 'Our specialty pizza'
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Stir_Fry_Wok_-_Free_For_Commercial_Use_-_FFCU_%2827159057131%29.jpg',
        name: 'Wok away healthy',
        des: 'Healthy blend of noodles and vegies'
    }
]

Vue.component('post-component', {
    template:  `
    <div class="post col-3">
        <img :src="post.img">
        <br>
        <strong>{{ post.name }}</strong>
        <br>
        <small>{{ post. des }}</small>
        <br>
        <button>Add to Cart</button>
    </div>
    `,
    props: {
        post: Object
    }
});

new Vue ({
    el : '#vue',
    data: {
        posts
    }
});