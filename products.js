 const products = [
    //best seller
    {id:1, name:`Lindt SWISS CLASSIC Milk Chocolate Bar, 100g`,price:6, img:`img/seller/swiss100g.png`, status: `hot`},
    {id:2, name:`Dark Chocolate Truffle Lover's Gift Set`,price:79, img:`img/seller/godiva79.png`, status: `hot`},
    {id:3, name:`Ferrero Rocher Gourmet Hazelnut Milk Chocolate Gift Bo`,price:13, img:`img/seller/rocher.png`, status: `hot`},
    {id:4, name:`Milk Chocolate Almond Crunch Bars`,price:15.99, img:`img/seller/oobli.png`, status: `hot`},
    {id:5, name:`Fresh Chocolate truffle, 12pc`,price:7.99 , img:`img/seller/matcha.png`, status: `hot`},


    //on Sale
    
    {id:26, name:`Milk Chocolate Crunchy Hazelnut Bar`,price:6, salePrice:5, salePercentage:15 , img:`img/sale/lake.png`, status: `onSale`},
    {id:27, name:`Andy Anand Artisan Dark Chocolate Truffles, 24pc`,price:70, salePrice:56, salePercentage:20 , img:`img/sale/andy.png`, status: `onSale`},
    {id:28, name:`Sainsburys Mini Assorted Chocolate Bars Size 25 Pack`,price:5.75, salePrice:4, salePercentage:30 , img:`img/sale/mini.png`, status: `onSale`},
    {id:29, name:`White Chocolate & Strawberry Bar 100 g`,price:12, salePrice:11, salePercentage:12 , img:`img/sale/fraise.png`, status: `onSale`},


    //Milk Chocolate bar
    {
        id: 6,
        name:`Cadbury, Milk Chocolate Candy Bar, 3.5 Ounce,`,
        price:4.25,
        img:`img/milk chocolate bar/dairymilk3,5.png`,
        status: `normal`,
        type:`milk`,
        category:`bar`
    },

    {
        id: 7,
        name:`HERSHEY'S Creamy Milk Chocolate Candy Bar, 45g`,
        price:1.5,
        img:`img/milk chocolate bar/hersheymilk45g.png`,
        status: `normal`,
        type:`milk`,
        category:`bar`
    },

    {
        id: 8,
        name:`Milk Chocolate Cadbury 85G`,
        price:2.49,
        img:`img/milk chocolate bar/dairymilk90g.png`,
        status: `normal`,
        type:`milk`,
        category:`bar`
    },

        {
        id: 9,
        name:`Crunch Milk Chocolate Sharing Bar 100g`,
        price:5,
        img:`img/milk chocolate bar/nestle100g.png`,
        status: `normal`,
        type:`milk`,
        category:`bar`
    },

    {
        id: 10,
        name:`Hershey Milk Chocolate Flavour, 40g`,
        price:9,
        img:`img/milk chocolate bar/hersheycream.png`,
        status: `normal`,
        type:`milk`,
        category:`bar`
    },



    //Dark Chocolae bar
    {
        id: 11,
        name:`Great Value Dark Chocolate Bar, 3.52 oz`,
        price:2,
        img:`img/dark chocolate bar/greatvalue.png`,
        status: `normal`,
        type:`dark`,
        category:`bar`
    },

    {
        id: 12,
        name:`80% Cocoa Super Dark Chocolate Bar`,
        price:6,
        img:`img/dark chocolate bar/lake.png`,
        status: `normal`,
        type:`dark`,
        category:`bar`
    },
    {
        id: 13,
        name:`Lindt LINDOR 70% Cacao Dark Chocolate Bar`,
        price:6,
        img:`img/dark chocolate bar/lindor100g.png`,
        status: `normal`,
        type:`dark`,
        category:`bar`
    },
    {
        id: 14,
        name:`Lindt EXCELLENCE 85% Cacao Dark Chocolate Bar, 100g`,
        price:6,
        img:`img/dark chocolate bar/dark70.png`,
        status: `normal`,
        type:`dark`,
        category:`bar`
    },
    {
        id: 15,
        name:`Venchi 75% extra dark chocolate bar - No added sugar`,
        price:8,
        img:`img/dark chocolate bar/venchi.png`,
        status: `normal`,
        type:`dark`,
        category:`bar`
    },
    


    //TRUFFLE CHOCOLATE
    {
        id: 16,
        name:`Mik Truffle Chocolate, 24pc`,
        price:99,
        img:`img/truffle chocolate/24pc.png`,
        status: `normal`,
        type:`milk`,
        category:`truffle`
    },  
    {
        id: 17,
        name:`Grand Dark Truffle Chocolate assortment, 24pc`,
        price:100,
        img:`img/truffle chocolate/dark24pc.png`,
        status: `normal`,
        type:`milk`,
        category:`truffle`
    },  
    {
        id: 18,
        name:`Dark Chocolate Truffles Gift Box, 15pc.`,
        price:58,
        img:`img/truffle Chocolate/dark15pc.png`,
        status: `normal`,
        type:`dark`,
        category:`truffle`
    },  
    {
        id: 19,
        name:`Dark Chocolate Truffles Gift Box, 18pc.`,
        price:40,
        img:`img/truffle Chocolate/18pc.png`,
        status: `normal`,
        type:`dark`,
        category:`truffle`
    },  
    {
        id: 20,
        name:`Chocolate Truffles assortment, 15pc`,
        price:13,
        img:`img/truffle Chocolate/15pc.png`,
        status: `normal`,
        type:`dark`,
        category:`truffle`
    },  
      


    //Assorted Chocolate

    {
        id:21,
        name: `Assorted Chocolate Gold Gift Box, Gold Ribbon, 72 pc.`,
        price:150,
        img:`img/assorted chocolate/milkassorted.png`,
        status: `normal`,
        category:`assorted`
    },
    {
        id:22,
        name: `Assorted Chocolate Gold Gift Box, 25pc`,
        price:65,
        img:`img/assorted chocolate/25pc.png`,
        status: `normal`,
        category:`assorted`
    },
    {
        id:23,
        name: `Mueller assorted Chocolates, 18pc`,
        price:28,
        img:`img/assorted chocolate/18pc.png`,
        status: `normal`,
        category:`assorted`
    },
    {
        id:24,
        name: `Chocilo 48 Pack Chocolate Assortment Gift Box - 570g`,
        price:80,
        img:`img/assorted chocolate/darkassorted.png`,
        status: `normal`,
        category:`assorted`
    },
    {
        id:25,
        name: `Purdys Assorted Chocolate Favourites Gift Box, 15pc`,
        price:48,
        img:`img/assorted chocolate/15pc.png`,
        status: `normal`,
        category:`assorted`
    },
    
];