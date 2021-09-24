const characters = [{
  name: 'Elsword',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felsword%2Felsword.png?alt=media&token=590001bd-3af0-403c-a578-8e2e3b713e32',
  bgColor: 'bg-elsword',
  textColor: 'text-elsword dark:text-elsword-dark',
  hoverBgColor: 'hover:bg-elsword',
  child: [{
    name: 'Sword Knight',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felsword%2Fsword-knight.png?alt=media&token=800e5e6f-7bbd-4b81-8fed-946d05be895a',
    child: [{
      name: 'Lord Knight',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felsword%2Flord-knight.png?alt=media&token=da9f6b22-4899-4f15-9c04-6028e3bbe912',
    }, {
      name: 'Lord Knight (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felsword%2Flord-knight-trans.png?alt=media&token=625697f8-1bf5-4656-bb26-5bdb18c65bc3',
    }, {
      name: 'Knight Emperor',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felsword%2Fknight-emperor.png?alt=media&token=f61d4722-9fad-4365-ad84-e396aa597156',
    }],
  }, {
    name: 'Magic Knight',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felsword%2Fmagic-knight.png?alt=media&token=2ba86346-23d0-4a7e-91a2-a1faeb6e3dac',
    child: [{
      name: 'Rune Slayer',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felsword%2Frune-slayer.png?alt=media&token=87e4489c-f8e9-490b-be6e-3cb8cf9d7a25',
    }, {
      name: 'Rune Slayer (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felsword%2Frune-slayer-trans.png?alt=media&token=694be52f-c73f-4097-9d53-3187de5f06ee',
    }, {
      name: 'Rune Master',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felsword%2Frune-master.png?alt=media&token=15496cf6-ad41-4b12-9c36-5b721967473b',
    }],
  }, {
    name: 'Sheath Knight',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felsword%2Fsheath-knight.png?alt=media&token=8a10fbce-e018-490b-8027-90cd42b881e1',
    child: [{
      name: 'Infinity Sword',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felsword%2Finfinity-sword.png?alt=media&token=7905c1fd-3f63-4fd9-af42-164cc8399b55',
    }, {
      name: 'Infinity Sword (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felsword%2Finfinity-sword-trans.png?alt=media&token=ad4b1baf-b75f-480f-900f-957f8530e2be',
    }, {
      name: 'Immortal',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felsword%2Fimmortal.png?alt=media&token=4b0c3fbf-30e9-4c24-bab0-cc5078a63d4c',
    }],
  }, {
    name: 'Root Knight',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felsword%2Froot-knight.png?alt=media&token=675a9874-725b-4c53-9efb-d04a874e0b9a',
    child: [{
      name: 'Sacred Templar',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felsword%2Fsacred-templar.png?alt=media&token=c9320eac-4912-42ad-b31f-df96f72ee56e',
    }, {
      name: 'Sacred Templar (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felsword%2Fsacred-templar-trans.png?alt=media&token=b7e00465-4375-4576-9b3d-f7950521d932',
    }, {
      name: 'Genesis',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felsword%2Fgenesis.png?alt=media&token=9f7b734a-d5ad-453b-8389-4dc69aa569e3',
    }],
  }],
}, {
  name: 'Aisha',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Faisha%2Faisha.png?alt=media&token=83ed3a09-1aaf-4c2a-8aab-bfb9f541cf65',
  bgColor: 'bg-aisha',
  textColor: 'text-aisha dark:text-aisha-dark',
  hoverBgColor: 'hover:bg-aisha',
  child: [{
    name: 'High Magician',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Faisha%2Fhigh-magician.png?alt=media&token=1d92ff19-3f80-496c-b7ff-ce304ed5430d',
    child: [{
      name: 'Elemental Master',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Faisha%2Felemental-master.png?alt=media&token=3f150e4a-57ad-4e57-abbb-51dfc77bd71f',
    }, {
      name: 'Elemental Master (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Faisha%2Felemental-master-trans.png?alt=media&token=23821e85-1466-4e60-bd10-360090bc30f5',
    }, {
      name: 'Aether Sage',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Faisha%2Faether-sage.png?alt=media&token=a2b72dfa-de33-43ad-890b-3b331e317ab3',
    }],
  }, {
    name: 'Dark Magician',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Faisha%2Fdark-magician.png?alt=media&token=8a4ebb8a-ed19-4e96-ae84-5bdbbcb4ee4c',
    child: [{
      name: 'Void Princess',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Faisha%2Fvoid-princess.png?alt=media&token=d6a75ae9-94a2-4cd1-bcfa-99a172332f7f',
    }, {
      name: 'Void Princess (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Faisha%2Fvoid-princess-trans.png?alt=media&token=a12b5a80-6208-4a7a-853a-f4645e969b53',
    }, {
      name: 'Oz Sorcerer',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Faisha%2Foz-sorcerer.png?alt=media&token=9be7ff50-5c77-4dc4-b59b-c613ee41c013',
    }],
  }, {
    name: 'Battle Magician',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Faisha%2Fbattle-magician.png?alt=media&token=3c9810b8-0f88-4e2b-a098-a293577c8994',
    child: [{
      name: 'Dimension Witch',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Faisha%2Fdimension-witch.png?alt=media&token=3aba92d1-6418-42f6-afba-964a687c1bb5',
    }, {
      name: 'Dimension Witch (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Faisha%2Fdimension-witch-trans.png?alt=media&token=492ed58c-a3ae-4a11-bc22-7636ca410f9f',
    }, {
      name: 'Metamorphy',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Faisha%2Fmetamorphy.png?alt=media&token=b86f5d7b-df42-4da5-b384-61af4b9ec3d7',
    }],
  }],
}, {
  name: 'Rena',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frena%2Frena.png?alt=media&token=7efb02c0-cb99-4023-ac3f-566cfeda605a',
  bgColor: 'bg-rena',
  textColor: 'text-rena',
  hoverBgColor: 'hover:bg-rena',
  child: [{
    name: 'Combat Ranger',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frena%2Fcombat-ranger.png?alt=media&token=a24e9307-7c63-4b14-a605-0a69cfe7f556',
    child: [{
      name: 'Wind Sneaker',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frena%2Fwind-sneaker.png?alt=media&token=17eb0ebe-2293-4dbb-bf24-ee2abb1b59c4',
    }, {
      name: 'Wind Sneaker (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frena%2Fwind-sneaker-trans.png?alt=media&token=9fb2979e-e9c1-4e14-bb97-4fc21db0e77d',
    }, {
      name: 'Anemos',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frena%2Fanemos.png?alt=media&token=3a8a1108-f72a-48be-ac5c-3a24c4aebad7',
    }],
  }, {
    name: 'Sniping Ranger',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frena%2Fsniping-ranger.png?alt=media&token=8b4a7875-fdc8-46f8-8acf-bdd413f89283',
    child: [{
      name: 'Grand Archer',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frena%2Fgrand-archer.png?alt=media&token=28934e81-a65e-420a-be1a-8cdf7e2179f4',
    }, {
      name: 'Grand Archer (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frena%2Fgrand-archer-trans.png?alt=media&token=e369279f-df3d-4b73-bdcf-8457381afbc7',
    }, {
      name: 'Daybreaker',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frena%2Fdaybreaker.png?alt=media&token=350e8ee1-2927-48c8-bea3-a47e3dd56947',
    }],
  }, {
    name: 'Trapping Ranger',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frena%2Ftrapping-ranger.png?alt=media&token=920b086b-0a02-46e4-87f0-12f75a18299b',
    child: [{
      name: 'Night Watcher',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frena%2Fnight-watcher.png?alt=media&token=57f1089f-835a-4707-b493-bb3c4b3565bb',
    }, {
      name: 'Night Watcher (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frena%2Fnight-watcher-trans.png?alt=media&token=0ef559ec-7aec-4491-85f7-79329808cf58',
    }, {
      name: 'Twilight',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frena%2Ftwilight.png?alt=media&token=7ac37e2a-66cd-44cd-9cf3-77f20d682a98',
    }],
  }],
}, {
  name: 'Raven',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fraven%2Fraven.png?alt=media&token=f5678b62-ce43-4c44-9a22-55b2fbc00ebe',
  bgColor: 'bg-raven',
  textColor: 'text-raven dark:text-raven-dark',
  hoverBgColor: 'hover:bg-raven',
  child: [{
    name: 'Sword Taker',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fraven%2Fsword-taker.png?alt=media&token=739eacbb-d8d5-454b-bdca-b5aae77763c0',
    child: [{
      name: 'Blade Master',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fraven%2Fblade-master.png?alt=media&token=7813a963-4a5c-4d92-9a9a-704aa34555dc',
    }, {
      name: 'Blade Master (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fraven%2Fblade-master-trans.png?alt=media&token=4b60441b-ca1e-4625-a6e6-88e71667f524',
    }, {
      name: 'Furious Blade',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fraven%2Ffurious-blade.png?alt=media&token=47d5d10b-30bc-4494-90ab-1cb9ad04f843',
    }],
  }, {
    name: 'Over Taker',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fraven%2Fover-taker.png?alt=media&token=f69fb9d2-434d-4f50-9843-e6d24994b1e7',
    child: [{
      name: 'Reckless Fist',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fraven%2Freckless-fist.png?alt=media&token=0123d1ce-7cc2-4e87-a47c-c2107e059cd2',
    }, {
      name: 'Reckless Fist (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fraven%2Freckless-fist-trans.png?alt=media&token=135d780a-bf6d-438f-a4e4-93e4c70d8057',
    }, {
      name: 'Rage Hearts',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fraven%2Frage-hearts.png?alt=media&token=0a52a622-604d-4ac0-b0b4-032b774448d9',
    }],
  }, {
    name: 'Weapon Taker',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fraven%2Fweapon-taker.png?alt=media&token=59e403ff-9210-48c5-b6d5-48267cabc225',
    child: [{
      name: 'Veteran Commander',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fraven%2Fveteran-commander.png?alt=media&token=e33a0696-32a8-41aa-987f-e2697d53ec90',
    }, {
      name: 'Veteran Commander (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fraven%2Fveteran-commander-trans.png?alt=media&token=fa68b45d-40d2-41de-bd34-cdbd31402826',
    }, {
      name: 'Nova Imperator',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fraven%2Fnova-imperator.png?alt=media&token=b6fea89a-8d10-4ba8-ab4e-e54e27aba9b9',
    }],
  }],
}, {
  name: 'Eve',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Feve%2Feve.png?alt=media&token=3cf236ea-b900-4650-a9a7-efd5624dc679',
  bgColor: 'bg-eve',
  textColor: 'text-eve',
  hoverBgColor: 'hover:bg-eve',
  child: [{
    name: 'Code: Exotic',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Feve%2Fcode-exotic.png?alt=media&token=9bae2fe6-2d37-4e28-be6c-a07e60f37632',
    child: [{
      name: 'Code: Nemesis',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Feve%2Fcode-nemesis.png?alt=media&token=ca65c85a-95f1-4970-804c-89be31ed46fa',
    }, {
      name: 'Code: Nemesis (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Feve%2Fcode-nemesis-trans.png?alt=media&token=c24ad81a-0220-47e9-aeb0-2bdaf474d823',
    }, {
      name: 'Code: Ultimate',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Feve%2Fcode-ultimate.png?alt=media&token=9bf36eaa-b81e-4f65-99e4-c86d5a5ca7f2',
    }],
  }, {
    name: 'Code: Architecture',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Feve%2Fcode-architecture.png?alt=media&token=e779b5ab-1142-4681-9674-b651de86992f',
    child: [{
      name: 'Code: Empress',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Feve%2Fcode-empress.png?alt=media&token=b6ea096f-46e8-4d62-8fc1-42bbe8b6c0ec',
    }, {
      name: 'Code: Empress (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Feve%2Fcode-empress-trans.png?alt=media&token=1b30105e-b32e-4826-a603-f5026b1a650d',
    }, {
      name: 'Code: Essencia',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Feve%2Fcode-essencia.png?alt=media&token=3f7ab4d9-7447-4d94-b566-c04c18213e18',
    }],
  }, {
    name: 'Code: Electra',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Feve%2Fcode-electra.png?alt=media&token=95d86e16-90c3-4983-a0a0-0d705d16d672',
    child: [{
      name: 'Code: Battle Seraph',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Feve%2Fcode-battle-seraph.png?alt=media&token=563c9872-0469-44da-9c04-9e8594a49277',
    }, {
      name: 'Code: Battle Seraph (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Feve%2Fcode-battle-seraph-trans.png?alt=media&token=9b383bc4-b9fb-4075-b09a-48bb3788c086',
    }, {
      name: 'Code: Sariel',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Feve%2Fcode-sariel.png?alt=media&token=3864fd45-a631-42e5-b3eb-ef935181a352',
    }],
  }, {
    name: 'Code: Unknown',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Feve%2Fcode-unknown.png?alt=media&token=d6131105-c905-49be-a416-1109e79dacc3',
    child: [{
      name: 'Code: Failess',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Feve%2Fcode-failess.png?alt=media&token=5c6eef8b-04ee-4a2e-905c-b2c4dbca1d9b',
    }, {
      name: 'Code: Failess (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Feve%2Fcode-failess-trans.png?alt=media&token=67f5ecc3-a62b-44c8-8848-713399835f37',
    }, {
      name: 'Code: Antithese',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Feve%2Fcode-antithese.png?alt=media&token=2bccddd7-5816-49f7-937f-2a06edc15e0e',
    }],
  }],
}, {
  name: 'Chung',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fchung%2Fchung.png?alt=media&token=d5c07628-184b-4523-bf08-fb04f3612f49',
  bgColor: 'bg-chung',
  textColor: 'text-chung',
  hoverBgColor: 'hover:bg-chung',
  child: [{
    name: 'Fury Guardian',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fchung%2Ffury-guardian.png?alt=media&token=4efef97b-1a1e-4514-96fa-71f480705e99',
    child: [{
      name: 'Iron Paladin',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fchung%2Firon-paladin.png?alt=media&token=6c01b7c1-ab41-41be-9803-31d97648dab8',
    }, {
      name: 'Iron Paladin (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fchung%2Firon-paladin-trans.png?alt=media&token=2515b937-217d-41c4-9260-d6678b9897ba',
    }, {
      name: 'Comet Crusader',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fchung%2Fcomet-crusader.png?alt=media&token=75a3ce19-2919-49b7-9e74-438bc79bd8d3',
    }],
  }, {
    name: 'Shooting Guardian',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fchung%2Fshooting-guardian.png?alt=media&token=b6df83e1-0513-4d99-ad7d-8d0ab9f1d7e5',
    child: [{
      name: 'Deadly Chaser',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fchung%2Fdeadly-chaser.png?alt=media&token=1c812261-21f3-41d1-baef-fc136dcc0e80',
    }, {
      name: 'Deadly Chaser (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fchung%2Fdeadly-chaser-trans.png?alt=media&token=e371d2d9-a360-4b8a-bbb3-60ca09758981',
    }, {
      name: 'Fatal Phantom',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fchung%2Ffatal-phantom.png?alt=media&token=2f3c8e50-e94d-4c47-ad01-fa1b22486cdf',
    }],
  }, {
    name: 'Shelling Guardian',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fchung%2Fshelling-guardian.png?alt=media&token=62f8a980-4dbb-4aeb-a5ca-7093af7eb4c8',
    child: [{
      name: 'Tactical Trooper',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fchung%2Ftactical-trooper.png?alt=media&token=bf20e022-d3ff-4e46-941d-b18a058780cb',
    }, {
      name: 'Tactical Trooper (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fchung%2Ftactical-trooper-trans.png?alt=media&token=b447a730-6021-441a-8b5f-190cd5ec7feb',
    }, {
      name: 'Centurion',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fchung%2Fcenturion.png?alt=media&token=36e34528-ef84-4c23-97fb-41b59013af66',
    }],
  }],
}, {
  name: 'Ara',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fara%2Fara.png?alt=media&token=11cbfcc6-4f89-4aac-ac21-6ddb7f67b8f7',
  bgColor: 'bg-ara',
  textColor: 'text-ara',
  hoverBgColor: 'hover:bg-ara',
  child: [{
    name: 'Little Hsien',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fara%2Flittle-hsien.png?alt=media&token=27cb3311-c66b-441a-b99e-82fd3f2c8566',
    child: [{
      name: 'Sakra Devanam',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fara%2Fsakra-devanam.png?alt=media&token=ee671f27-74c0-47e5-b00c-c4f29d4e0604',
    }, {
      name: 'Sakra Devanam (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fara%2Fsakra-devanam-trans.png?alt=media&token=4b4a4874-faac-4ed0-9230-1c44876e88c7',
    }, {
      name: 'Apsara',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fara%2Fapsara.png?alt=media&token=dbf45663-58e1-46e2-82c5-174a6c684d28',
    }],
  }, {
    name: 'Little Devil',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fara%2Flittle-devil.png?alt=media&token=58cea98b-066e-4568-9571-3d783e6e3d2b',
    child: [{
      name: 'Yama Raja',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fara%2Fyama-raja.png?alt=media&token=410e3fde-2aa5-42f6-a80b-d09cba449b19',
    }, {
      name: 'Yama Raja (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fara%2Fyama-raja-trans.png?alt=media&token=00737216-9362-43c3-84e4-62fc934e0b04',
    }, {
      name: 'Devi',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fara%2Fdevi.png?alt=media&token=cbd4303b-79d9-4599-90f8-6e054e5e6ebe',
    }],
  }, {
    name: 'Little Specter',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fara%2Flittle-specter.png?alt=media&token=27a31597-d3d5-4d6c-9c7e-822bf306c6e9',
    child: [{
      name: 'Asura',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fara%2Fasura.png?alt=media&token=ef721814-c767-4784-aad6-0df0981c9383',
    }, {
      name: 'Asura (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fara%2Fasura-trans.png?alt=media&token=11530201-af16-4206-9829-06e3d5c34b97',
    }, {
      name: 'Shakti',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fara%2Fshakti.png?alt=media&token=c2be15cd-d3ac-4a39-89fd-8ce7fcc75e21',
    }],
  }],
}, {
  name: 'Elesis',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felesis%2Felesis.png?alt=media&token=99c20cbc-d08a-4db1-9607-29f2c3bbe82c',
  bgColor: 'bg-elesis',
  textColor: 'text-elesis dark:text-elesis-dark',
  hoverBgColor: 'hover:bg-elesis',
  child: [{
    name: 'Saber Knight',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felesis%2Fsaber-knight.png?alt=media&token=797e033d-1505-49a4-8177-db79f5fe9318',
    child: [{
      name: 'Grand Master',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felesis%2Fgrand-master.png?alt=media&token=b9651045-fe20-4044-a19e-5bb97e8f70f0',
    }, {
      name: 'Grand Master (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felesis%2Fgrand-master-trans.png?alt=media&token=0b396e9e-e754-4041-98c5-30e6e846bab5',

    }, {
      name: 'Empire Sword',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felesis%2Fempire-sword.png?alt=media&token=ddbc6091-6f99-4f3c-ac67-b65dcc9a6bea',
    }],
  }, {
    name: 'Pyro Knight',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felesis%2Fpyro-knight.png?alt=media&token=50d1dfc1-24ab-4d3b-94a2-4e7d0015aa26',
    child: [{
      name: 'Blazing Heart',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felesis%2Fblazing-heart.png?alt=media&token=1fc8b6ad-e4d8-41d9-b34b-f5d364fd8641',
    }, {
      name: 'Blazing Heart (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felesis%2Fblazing-heart-trans.png?alt=media&token=843d210a-f151-4e93-b3e1-c9f6144f2162',
    }, {
      name: 'Flame Lord',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felesis%2Fflame-lord.png?alt=media&token=f42a57f7-963f-496e-bc8a-a1791f37fbb9',
    }],
  }, {
    name: 'Dark Knight',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felesis%2Fdark-knight.png?alt=media&token=06a404fb-ac65-42d2-bc37-32aafd8466bb',
    child: [{
      name: 'Crimson Avenger',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felesis%2Fcrimson-avenger.png?alt=media&token=3ae987b7-a631-44c0-8c71-a66babf98dd3',
    }, {
      name: 'Crimson Avenger (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felesis%2Fcrimson-avenger-trans.png?alt=media&token=825a1238-c5ee-4da7-bb9c-ce8951748b06',
    }, {
      name: 'Blood Queen',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Felesis%2Fbloody-queen.png?alt=media&token=059c29c8-a274-4743-8d7c-6ca0c41c856d',
    }],
  }],
}, {
  name: 'Add',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fadd%2Fadd.png?alt=media&token=f83ea6aa-317e-4526-8ff7-d06de0c04c0f',
  bgColor: 'bg-add',
  textColor: 'text-add',
  hoverBgColor: 'hover:bg-add',
  child: [{
    name: 'Psyshic Tracer',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fadd%2Fpsychic-tracer.png?alt=media&token=e0136ca3-7b9a-42d1-8d53-a8e282ba970f',
    child: [{
      name: 'Lunatic Psyker',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fadd%2Flunatic-psyker.png?alt=media&token=53a59b0d-8b9b-4fc1-aaf7-7b46572cbe68',

    }, {
      name: 'Lunatic Psyker (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fadd%2Flunatic-psyker-trans.png?alt=media&token=aaac52ea-df6b-4bac-a21a-ddcf825cd9a1',

    }, {
      name: 'Doom Bringer',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fadd%2Fdoom-bringer.png?alt=media&token=f5746258-1688-431b-b752-57a02799b282',

    }],
  }, {
    name: 'Arc Tracer',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fadd%2Farc-tracer.png?alt=media&token=d5401cb8-12b9-4829-b53a-b82ebff94780',
    child: [{
      name: 'Mastermind',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fadd%2Fmastermind.png?alt=media&token=87cda009-fdc6-4126-8b86-dfefc92cf6f8',

    }, {
      name: 'Mastermind (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fadd%2Fmastermind-trans.png?alt=media&token=d7a0b5e3-b9e5-46f5-9a85-f2873ad15458',

    }, {
      name: 'Dominator',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fadd%2Fdominator.png?alt=media&token=f01e7323-6a34-4059-a626-5054b18f7733',

    }],
  }, {
    name: 'Time Tracer',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fadd%2Ftime-tracer.png?alt=media&token=a53e3bf6-1c88-4d83-a87c-7f996fcce4a7',
    child: [{
      name: 'Diabolic Esper',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fadd%2Fdiabolic-esper.png?alt=media&token=2d5af881-9c43-4420-91d1-feff67ab1e1c',

    }, {
      name: 'Diabolic Esper (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fadd%2Fdiabolic-esper-trans.png?alt=media&token=f733e96f-e05b-4dd7-b0d7-ff9fa4c70a8b',

    }, {
      name: 'Mad Paradox',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fadd%2Fmad-paradox.png?alt=media&token=543c68c4-eb12-4c63-847c-1ae1878c7820',

    }],
  }],
}, {
  name: 'Lu',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flu-ciel%2Flu.png?alt=media&token=7c309cbe-325e-48a9-9c16-a9d67289c046',
  bgColor: 'bg-luciel',
  textColor: 'text-luciel dark:text-luciel-dark',
  hoverBgColor: 'hover:bg-luciel',
  child: [{
    name: 'Chiliarch',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flu-ciel%2Fchiliarch.png?alt=media&token=974fa3fb-13a4-40e5-b6e5-992cb5c14481',
    child: [{
      name: 'Chiliarch (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flu-ciel%2Fchiliarch-trans.png?alt=media&token=2470298a-f226-4b8f-8cb1-aa40f7934c24',
    }, {
      name: 'Catastrophe(Timoria)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flu-ciel%2Ftimoria.png?alt=media&token=08623ebd-9699-4e46-8246-e19b69470f93',
    }],
  }, {
    name: 'Noblesse',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flu-ciel%2Fnoblesse.png?alt=media&token=b16e53eb-3e60-464d-b07b-cfdcafae6d4d',
    child: [{
      name: 'Noblesse (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flu-ciel%2Fnoblesse-trans.png?alt=media&token=9d87dacb-461c-4180-8ed4-c7babb1a9b10',
    }, {
      name: 'Innocent(Ishtar)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flu-ciel%2Fishtar.png?alt=media&token=e51f6856-5ea5-4b05-ad71-3fb04f330b3d',
    }],
  }, {
    name: 'Diabla',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flu-ciel%2Fdiabla.png?alt=media&token=ffdd3ada-36e7-4771-9667-e729b298ceec',
    child: [{
      name: 'Diabla (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flu-ciel%2Fdiabla-trans.png?alt=media&token=eb60bd9c-ee2d-496d-9183-81d39e33e57c',
    }, {
      name: 'Diangelion(Iblis)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flu-ciel%2Fiblis.png?alt=media&token=91d70179-960e-4e14-b693-bced1d73b589',
    }],
  }],
}, {
  name: 'Ciel',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flu-ciel%2Fciel.png?alt=media&token=b54d35db-58c4-4eb2-bcd9-221ea499ef02',
  bgColor: 'bg-luciel',
  textColor: 'text-luciel dark:text-luciel-dark',
  hoverBgColor: 'hover:bg-luciel',
  child: [{
    name: 'Dreadlord',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flu-ciel%2Fdreadlord.png?alt=media&token=ba8dbff7-87bf-4483-916e-a3938622dcdd',
    child: [{
      name: 'Dreadlord (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flu-ciel%2Fdreadlord-trans.png?alt=media&token=e2f47120-3c68-48b0-bd9f-8503daf0a245',
    }, {
      name: 'Catastrophe(Abysser)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flu-ciel%2Fabysser.png?alt=media&token=10e37c5d-5811-47a0-8c29-64e86234e185',
    }],
  }, {
    name: 'Royal Guard',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flu-ciel%2Froyal-guard.png?alt=media&token=621543f2-0bca-452c-9ced-89a2ee8a6d31',
    child: [{
      name: 'Royal Guard (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flu-ciel%2Froyal-guard-trans.png?alt=media&token=2c78f5a4-d18c-4209-8fcd-0f5eb9220456',
    }, {
      name: 'Innocent(Chevalier)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flu-ciel%2Fchevalier.png?alt=media&token=108a0225-55fc-426f-b6fb-5c59e2750504',
    }],
  }, {
    name: 'Demonio',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flu-ciel%2Fdemonio.png?alt=media&token=4f5a201e-fc97-416a-89cb-f53728c792ae',
    child: [{
      name: 'Demonio (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flu-ciel%2Fdemonio-trans.png?alt=media&token=9f544aeb-4704-48c7-86f2-dc7f416b85a4',
    }, {
      name: 'Diangelion(Anular)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flu-ciel%2Fanular.png?alt=media&token=c79d7b0c-790d-4ef2-982f-b11ee4e1d5d9',
    }],
  }],
}, {
  name: 'Rose',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Frose.png?alt=media&token=dcad2e1b-f12b-4c47-a67c-4da32edf4a9a',
  bgColor: 'bg-rose',
  textColor: 'text-rose',
  hoverBgColor: 'hover:bg-rose',
  child: [{
    name: 'Heavy Barrel',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Fheavy-barrel.png?alt=media&token=0d3d569a-bb8f-4daf-a612-329c30428ea6',
    child: [{
      name: 'Storm Trooper',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Fstorm-trooper.png?alt=media&token=83d78400-fdd8-49ca-9f85-5427ed9e5b37',
    }, {
      name: 'Storm Trooper (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Fstorm-trooper-trans.png?alt=media&token=0ab82dc1-f68f-4713-8ec9-e5d52ee1008c',
    }, {
      name: 'Tempest Burster',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Ftempest-burster.png?alt=media&token=bf1c3fcf-186e-4a05-a5b0-1ab8c05c0536',
    }],
  }, {
    name: 'Bloodia',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Fbloodia.png?alt=media&token=91b60a7c-fc8c-4fbf-9660-d3d0ab070c1b',
    child: [{
      name: 'Crimson Rose',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Fcrimson-rose.png?alt=media&token=0242b5ba-82a6-4cfa-8217-fb20dacb68f3',
    },
    {
      name: 'Crimson Rose (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Fcrimson-rose-trans.png?alt=media&token=4bf3928c-5d74-4777-9416-e83d4f6e1f19',
    }, {
      name: 'Black Massacre',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Fblack-massacre.png?alt=media&token=aa1095a3-ceb4-41bf-abcb-6e8069cc3109',
    }],
  }, {
    name: 'Valkyrie',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Fvalkyrie.png?alt=media&token=320148bd-b017-454d-bb51-33668a1708ef',
    child: [{
      name: 'Freyja',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Ffreyja.png?alt=media&token=bf17559b-56e2-4ff9-ac02-5091202109b4',
    }, {
      name: 'Freyja (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Ffreyja-trans.png?alt=media&token=3f6c1401-de20-4c3c-bda7-497aa0be39f1',
    }, {
      name: 'Minerva',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Fminerva.png?alt=media&token=1a549ec6-83e8-475f-b5af-45d9126aaa7e',
    }],
  }, {
    name: 'Metal Heart',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Fheavy-barrel.png?alt=media&token=0d3d569a-bb8f-4daf-a612-329c30428ea6',
    child: [{
      name: 'Optimus',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Foptimus.png?alt=media&token=5b1f9adb-fee0-4c1a-9cde-d86e7bdadbbc',
    }, {
      name: 'Optimus (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Foptimus-trans.png?alt=media&token=52d3ad29-6186-4dd7-aacd-7a74d94e4629',
    }, {
      name: 'Prime Operator',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Frose%2Fprime-operator.png?alt=media&token=97072598-cd2f-4ebd-9e8a-8771ac1449c7',
    }],
  }],
}, {
  name: 'Ain',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fain%2Fain.png?alt=media&token=f57ef11f-5c77-49c6-bf20-5ff49345e937',
  bgColor: 'bg-ain',
  textColor: 'text-ain',
  hoverBgColor: 'hover:bg-ain',
  child: [{
    name: 'Lofty: Executor',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fain%2Flofty-executor.png?alt=media&token=1f393f82-42dd-43ed-85c7-cad8e2319398',
    child: [{
      name: 'Arme Thaumaturgy',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fain%2Farme-thaumaturgy.png?alt=media&token=c6731175-b991-413c-9a14-b0736c723dd6',
    }, {
      name: 'Arme Thaumaturgy (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fain%2Farme-thaumaturgy-trans.png?alt=media&token=a6d27335-b9fc-4921-8b09-90bfc6b8311f',
    }, {
      name: 'Ritcher',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fain%2Fritcher.png?alt=media&token=1c88ae8f-dfec-4e1a-bf21-1daa9657d0ea',
    }],
  }, {
    name: 'Lofty: Anpassen',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fain%2Flofty-anpassen.png?alt=media&token=8d6ed7c7-4e68-4a31-b4d3-9787e9b05b9b',
    child: [{
      name: 'Erbluhen Emotion',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fain%2Ferbluhen-emotion.png?alt=media&token=e53f43df-2781-4c88-8e7a-d9a179876511',
    }, {
      name: 'Erbluhen Emotion (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fain%2Ferbluhen-emotion-trans.png?alt=media&token=2d41a0a7-8286-4896-801f-abefac8f0c95',
    }, {
      name: 'Bluhen',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fain%2Fbluhen.png?alt=media&token=d35d7c47-aa56-4554-ae3d-7eaf8a7c4df7',
    }],
  }, {
    name: 'Lofty: Wanderer',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fain%2Flofty-wanderer.png?alt=media&token=691c48a2-6ad8-46dd-89a0-323d1911e0dc',
    child: [{
      name: 'Apostasia',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fain%2Fapostasia.png?alt=media&token=ec294a80-cee7-402d-ac71-0ce3149b56e0',
    }, {
      name: 'Apostasia (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fain%2Fapostasia-trans.png?alt=media&token=11a3957b-c7dc-477c-b2ef-9173d14c7f79',
    }, {
      name: 'Herrscher',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fain%2Fherrscher.png?alt=media&token=0224de2a-9106-42a0-b6a9-089357218d57',
    }],
  }],
}, {
  name: 'Laby',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flaby%2Flaby.png?alt=media&token=57641c05-ef01-407b-9309-d8729347bbc3',
  bgColor: 'bg-laby',
  textColor: 'text-laby',
  hoverBgColor: 'hover:bg-laby',
  child: [{
    name: 'Sparky Child',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flaby%2Fsparky-child.png?alt=media&token=28543c8f-d76b-4e7e-87d5-a1d6f01d9019',
    child: [{
      name: 'Rumble Pumn',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flaby%2Frumble-pumn.png?alt=media&token=b38f9e35-fb82-48f8-ba4d-c9f933284ead',
    }, {
      name: 'Rumble Pumn (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flaby%2Frumble-pumn-trans.png?alt=media&token=7c4b3e72-df85-4d9f-87e6-d212969d92d0',
    }, {
      name: 'Eternity Winter',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flaby%2Feternity-winter.png?alt=media&token=d2a163ab-1dab-4781-bf7a-b6e1a49ce4e2',
    }],
  }, {
    name: 'Twinkle Child',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flaby%2Ftwinkle-child.png?alt=media&token=8409cdfd-261d-4016-82fe-fe3100bf7583',
    child: [{
      name: 'Shinning Romantica',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flaby%2Fshining-romantica.png?alt=media&token=e90a525d-89a4-445b-9d44-97432b4875e3',
    }, {
      name: 'Shinning Romantica (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flaby%2Fshining-romantica-trans.png?alt=media&token=e609ca23-9d96-426e-a3e9-74421f5de56a',
    }, {
      name: 'Radiant Soul',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flaby%2Fradiant-soul.png?alt=media&token=b825672b-0d09-4e42-bcf3-2fbe31fc2c21',
    }],
  }, {
    name: 'Rusty Child',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flaby%2Frusty-child.png?alt=media&token=48bd851a-768c-4a7c-a871-233f9bcfc745',
    child: [{
      name: 'Daydreamer',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flaby%2Fdaydreamer.png?alt=media&token=f6f7b203-719f-4f04-995f-f56763519a74',
    }, {
      name: 'Daydreamer (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flaby%2Fdaydreamer-trans.png?alt=media&token=0271eefe-18d1-4a3a-9bdc-63ef3a2c1829',
    }, {
      name: 'Nisha Labyrinth',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Flaby%2Fnisha-labyrinth.png?alt=media&token=f7356de4-2794-4116-b125-0004d1c375fc',
    }],
  }],
}, {
  name: 'Noah',
  img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fnoah%2Fnoah.png?alt=media&token=475bfc88-48a6-49f4-87eb-859e8c290f3f',
  bgColor: 'bg-noah',
  textColor: 'text-noah',
  hoverBgColor: 'hover:bg-noah',
  child: [{
    name: 'Second Revenger',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fnoah%2Fsecond-revenger.png?alt=media&token=98541f5d-6082-49d1-a47f-0a4ea3d34961',
    child: [{
      name: 'Silent Shadow',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fnoah%2Fsilent-shadow.png?alt=media&token=03a14668-6cac-416d-a7de-df02000da072',
    }, {
      name: 'Silent Shadow (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fnoah%2Fsilent-shadow-trans.png?alt=media&token=8017d73a-16fe-40ab-bd4c-ed17a18a4b4f',
    }, {
      name: 'Liberator',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fnoah%2Fliberator.png?alt=media&token=f0cb8be8-1ecd-4143-ad31-b44f2fee1514',
    }],
  }, {
    name: 'Second Selection',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fnoah%2Fsecond-selection.png?alt=media&token=cb853e80-7c16-4272-b174-41cd7be436b8',
    child: [{
      name: 'Stellar Caster',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fnoah%2Fstellar-caster.png?alt=media&token=b90f5ed0-2766-465b-9baa-065653d06178',
    }, {
      name: 'Stellar Caster (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fnoah%2Fstellar-caster-trans.png?alt=media&token=ee7638a0-1a20-46e5-992d-314cfe719dd1',
    }, {
      name: 'Celestia',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fnoah%2Fcelestia.png?alt=media&token=503a6c33-a4df-4343-b529-6c099e899202',
    }],
  }, {
    name: 'Second Grief',
    img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fnoah%2Fsecond-grief.png?alt=media&token=18726336-f0a3-4a1b-ac7e-61d991a94d6b',
    child: [{
      name: 'Pale Pilgrim',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fnoah%2Fpale-pilgrim.png?alt=media&token=5db7d600-db23-4f15-8ab8-ed71bf34959d',
    }, {
      name: 'Pale Pilgrim (T)',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fnoah%2Fpale-pilgrim-trans.png?alt=media&token=0db84e9d-2169-40fd-a43e-6b402d7b7fba',
    }, {
      name: 'Nyx Pieta',
      img: 'https://firebasestorage.googleapis.com/v0/b/elfun-web-app.appspot.com/o/images%2Favatar%2Fnoah%2Fnyx-pieta.png?alt=media&token=8566acd9-529d-48ee-a1ce-29fdde2c33fa',
    }],
  }],
}]

export default characters
