import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Audemars Piguet Royal Oak SelfWinding",
        description: "Silver Dial",
        price: 12005,
        imageUrl:
          "https://compraderelogiosdeluxo.com.br/wp-content/uploads/2023/02/Audemars-Piguet-.jpg",
      },
      {
        name: "Rolex DateJust 41",
        description: "Iron Oystersteel in white gold",
        price: 50000.0,
        imageUrl:
          "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_1920/v1/catalogue/2025/upright-c/m126334-0009.jpg",
      },
      {
        name: "Rolex Datejust 36",
        description: "Emerald Cyster Perpetual",
        price: 80000.0,
        imageUrl:
          "https://www.corsage.com.br/rolex/wp-content/uploads/2023/07/m126234-0051_drp-upright-bba-with-shadow.webp",
      },
      {
        name: "Patek Philippe Complications",
        description: "Rose Gold",
        price: 97500.0,
        imageUrl:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT1CZJcoF3e3Q97idCKKGSpk1wEEIlkKvhp8vNv_b8u-VckM-GrONzEhhkgmOtL1Fj30suTkFI4w3AlPWpbdUlPC8UhfpWiOeKkSdo18ObcgGOOsmf91sUVHA",
      },
      {
        name: "Rolex Submariner",
        description: "White Gold",
        price: 45000,
        imageUrl:
          "https://lojafrattina.vtexassets.com/arquivos/ids/160751/m126619lb-0003_drp-upright-bba-with-shadow.png?v=638816324451100000",
      },
      {
        name: "Omega Speedmaster",
        description: "Silver MoonWatch",
        price: 32000,
        imageUrl:
          "https://www.pendulumrelogios.com.br/cdn/shop/files/CAPA_PRODUTOS_4_a8cae3cb-98b8-49aa-b75d-c1d6d881325b_1080x1080.png?v=1758749741",
      },
      {
        name: "TagHeuer Monaco",
        description: "Blue Cobalt",
        price: 900,
        imageUrl:
          "https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw74b21dc3/TAG_Heuer_Monaco/CBL2188.FT6261/CBL2188.FT6261_0913.png",
      },
      {
        name: "Seiko Presage",
        description: "White silver",
        price: 4200,
        imageUrl:
          "https://universaljoias.com.br/wp-content/uploads/2024/06/Relogio-Seiko-Presage-SPB463J1-7.jpg",
      },
      {
        name: "Cartier Santos de Cartier",
        description: "Large model, ADLC Steel",
        price: 7800.0,
        imageUrl:
          "https://cartier.vtexassets.com/arquivos/ids/206395/WSSA0039_1.png?v=637287935009030000",
      },
      {
        name: "Breitling Navitimer B01",
        description: "Chronograph 43mm Blue Dial",
        price: 9100.0,
        imageUrl:
          "https://monards.com.au/cdn/shop/files/BRTAB0138241G1P1.png?v=1683855804&width=1200",
      },
      {
        name: "Hublot Big Bang Unico",
        description: "Black Magic Ceramic",
        price: 22000.0,
        imageUrl:
          "https://lojafrattina.vtexassets.com/unsafe/1440x0/center/middle/filters:quality(100)/https%3A%2F%2Flojafrattina.vtexassets.com%2Farquivos%2Fids%2F159490%2FF001061_1.png%3Fv%3D638659035173530000",
      },
      {
        name: "Vacheron Constantin Overseas",
        description: "Blue Dial Steel 41mm",
        price: 25000.0,
        imageUrl:
          "https://www.vacheron-constantin.com/dam/rcq/vac/wF/4X/mk/qh/VU/GG/HI/zp/fj/If/RQ/wF4XmkqhVUGGHIzpfjIfRQ.png.transform.vacdetail.png",
      },
      {
        name: "IWC Big Pilot’s Watch",
        description: "43mm Black Dial Leather Strap",
        price: 8900.0,
        imageUrl:
          "https://iwcstore.vtexassets.com/arquivos/ids/157899/IW503008_1.jpg?v=638258862811030000",
      },
      {
        name: "Panerai Luminor Marina",
        description: "Quaranta Steel 40mm",
        price: 7100.0,
        imageUrl:
          "https://panerai.vtexassets.com/arquivos/ids/158359/watch-luminor-marina-quaranta-40mm-front-pam01372_1.png?v=638518222977670000",
      },
      {
        name: "Tudor Black Bay Fifty-Eight",
        description: "Navy Blue Bezel",
        price: 3900.0,
        imageUrl:
          "https://danglar.com.br/public/img/produtos/resized/479-1580-1580.jpg",
      },
      {
        name: "Jaeger-LeCoultre Reverso Tribute",
        description: "Monoface Small Seconds Blue",
        price: 10500.0,
        imageUrl:
          "https://lojafrattina.vtexassets.com/arquivos/ids/161345/Q3982590.jpg?v=638884614682270000",
      },
      {
        name: "Richard Mille RM 011",
        description: "Felipe Massa Flyback Chronograph",
        price: 150000.0,
        imageUrl:
          "https://wristaficionado.com/cdn/shop/files/richard-mille-rm-011-felipe-massa-flyback-chronograph-titanium-richard-mille-42085203771636.jpg?v=1726401038&width=2160",
      },
      {
        name: "Zenith El Primero Chronomaster",
        description: "Sport White Dial",
        price: 11000.0,
        imageUrl:
          "https://images.prismic.io/website-zenith-pre-prod/898c5b29-a50c-49b9-ab2b-47b91c98643a_03.3200.3600.69.M3200_V2.png?auto=compress,format&rect=0,0,1654,2362&w=1654&h=2362",
      },
      {
        name: "Girard-Perregaux Laureato",
        description: "42mm Green Dial Special Edition",
        price: 14300.0,
        imageUrl:
          "https://www.girard-perregaux.com/media/catalog/product/d/1/d16c92ee31cc6df62b2b22ad7891b21d.png?height=640&store=row_en&image-type=image",
      },
      {
        name: "Bulgari Octo Finissimo",
        description: "Automatic Satin-Polished Steel",
        price: 12500.0,
        imageUrl:
          "https://media.bulgari.com/image/upload/c_pad,h_851,w_1090/q_auto/f_auto/1312519.png",
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
