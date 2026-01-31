// src/utils/imageCdn.ts

const CLOUD_NAME = "aryan2002cloud";
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

export const imageCdn = {
  dharamshala: [
    {
      title: "Dharamshala Cricket Stadium",
      src: `${BASE_URL}/v1769881001/pakajphotos/Dharmshala-Stadium_f004vd.jpg`,
      alt: "Dharamshala Cricket Stadium taxi service view",
    },
    {
      title: "Norbulingka Institute",
      src: `${BASE_URL}/v1769880994/pakajphotos/dharmshala_norbulinga_irgqtc.jpg`,
      alt: "Norbulingka Institute Dharamshala sightseeing",
    },
  ],

  manali: [
    {
      title: "Manali Waterfall",
      src: `${BASE_URL}/v1769881000/pakajphotos/Waterfalls-in-Manali_nd9jnx.jpg`,
      alt: "Manali waterfall sightseeing taxi service",
    },
    {
      title: "Sissu Manali",
      src: `${BASE_URL}/v1769880998/pakajphotos/sisu-manali_jarrbj.avif`,
      alt: "Sissu village near Manali taxi route",
    },
    {
      title: "Atal Tunnel",
      src: `${BASE_URL}/v1769880996/pakajphotos/manali-atul_tunnel_ot0c8h.webp`,
      alt: "Atal Tunnel Manali cab service",
    },
    {
      title: "Manali Paragliding",
      src: `${BASE_URL}/v1769880998/pakajphotos/manali_baloon_y553ak.png`,
      alt: "Paragliding in Manali tour package",
    },
    {
      title: "Hidimba Temple",
      src: `${BASE_URL}/v1769880996/pakajphotos/hidimba-temple-manali-himachal-pradesh-1-musthead-hero_cyizhy.jpg`,
      alt: "Hidimba Devi Temple Manali sightseeing",
    },
    {
      title: "Solang Valley",
      src: `${BASE_URL}/v1769880997/pakajphotos/Himachal-India-Valley-Pardesh-Manali-Mandi-Solang_ggeugf.jpg`,
      alt: "Solang Valley Manali tour taxi",
    },
  ],

  shimla: [
    {
      title: "Jakhu Temple Trek",
      src: `${BASE_URL}/v1769880999/pakajphotos/Treks-in-Shimla-jhakuMandir_lwtorc.jpg`,
      alt: "Jakhu Temple Shimla trekking taxi",
    },
    {
      title: "Shimla Toy Train",
      src: `${BASE_URL}/v1769880999/pakajphotos/train-toy-shimla_xyyibx.jpg`,
      alt: "Shimla toy train sightseeing",
    },
    {
      title: "Shimla Ridge",
      src: `${BASE_URL}/v1769880998/pakajphotos/shimla_ridge_am6wwa.jpg`,
      alt: "Shimla Ridge taxi sightseeing",
    },
  ],

  kangra: [
    {
      title: "Kangra Fort",
      src: `${BASE_URL}/v1769880998/pakajphotos/kangra-fort_lfbwj2.webp`,
      alt: "Kangra Fort sightseeing taxi",
    },
    {
      title: "Kangra Temple",
      src: `${BASE_URL}/v1769880998/pakajphotos/kangra_temple1_qhnxmt.webp`,
      alt: "Kangra Devi Temple cab service",
    },
    {
      title: "Kangra Temple View",
      src: `${BASE_URL}/v1769880998/pakajphotos/kangra_temple2_dmosbr.webp`,
      alt: "Kangra Temple Himachal tour",
    },
    {
      title: "Kangra Temple Hills",
      src: `${BASE_URL}/v1769880994/pakajphotos/kangra_temple3_z2yiag.webp`,
      alt: "Kangra hills temple taxi route",
    },
    {
      title: "Kangra Temple Area",
      src: `${BASE_URL}/v1769880997/pakajphotos/kagra_temple4_rmds2h.jpg`,
      alt: "Kangra religious sightseeing cab",
    },
  ],

  amritsar: [
    {
      title: "Golden Temple",
      src: `${BASE_URL}/v1769880995/pakajphotos/goldentemple_kmxfse.jpg`,
      alt: "Golden Temple Amritsar taxi service",
    },
    {
      title: "Jallianwala Bagh",
      src: `${BASE_URL}/v1769880997/pakajphotos/jallianwala-bagh-amritsar-punjab-attr-about_adz9xa.jpg`,
      alt: "Jallianwala Bagh Amritsar sightseeing",
    },
    {
      title: "Wagah Border",
      src: `${BASE_URL}/v1769880999/pakajphotos/wagga_border_tagb2b.avif`,
      alt: "Wagah Border Amritsar taxi tour",
    },
  ],

  dalhousieKhajjiar: [
    {
      title: "Khajjiar",
      src: `${BASE_URL}/v1769880996/pakajphotos/khajiyaar_ibjivz.avif`,
      alt: "Khajjiar Dalhousie sightseeing taxi",
    },
    {
      title: "Kalatop",
      src: `${BASE_URL}/v1769880995/pakajphotos/from-the-lawn-kalatop_fmssmq.jpg`,
      alt: "Kalatop Dalhousie forest tour",
    },
    {
      title: "Panjpulla Waterfall",
      src: `${BASE_URL}/v1769880999/pakajphotos/waterfall-panjpulla_o8g38a.jpg`,
      alt: "Panjpulla waterfall Dalhousie taxi",
    },
  ],

  jammu: [
    {
      title: "Jammu City Hotel Area",
      src: `${BASE_URL}/v1769880997/pakajphotos/hotel_jammu_vqq67s.jpg`,
      alt: "Jammu city taxi service",
    },
    {
      title: "Vaishno Devi Bhawan",
      src: `${BASE_URL}/v1769880996/pakajphotos/bhawan_maa_da_gcxvz8.jpg`,
      alt: "Vaishno Devi Bhawan cab service",
    },
  ],

  kashmir: [
    {
      title: "Gulmarg Meadows",
      src: `${BASE_URL}/v1769880996/pakajphotos/gulmarg-meadows-srinagar-tri-iter-day1_iig3bs.jpg`,
      alt: "Gulmarg Kashmir sightseeing taxi",
    },
    {
      title: "Sonmarg",
      src: `${BASE_URL}/v1769880999/pakajphotos/sonmarg_qqzyk7.jpg`,
      alt: "Sonmarg Kashmir tour cab",
    },
  ],
};
