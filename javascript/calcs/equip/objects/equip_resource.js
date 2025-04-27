// JavaScript Document


accs_list_slot = [
    "suit",
    "hair",
    "topcos",
    "botcos",
    "glovescos",
    "shoescos",
    "wepcos",
    "top",
    "bot",
    "gloves",
    "shoes",
    "weapon",
    "wepacc",
    "support",
    "facetop",
    "facemid",
    "facebot",
    "faceear",
    "topacc",
    "botacc",
    "arm",
    "neck",
    "ring1",
    "ring2",
    "title",
    "pet",
    "customization",
    "customization_mark",
    "artifact",
    "artifact_circlet",
    "artifact_armor",
    "artifact_neck",
    "artifact_ring1",
    "artifact_ring2",
    "support_ib",
    "facetop_ib",
    "facemid_ib",
    "facebot_ib",
    "faceear_ib",
    "topacc_ib",
    "botacc_ib",
    "arm_ib",
    "neck_ib",
    "ring_ib",
    "wepacc_ib"

]

accs_list_other = [
    "base",
    "erp",
    "guild",
    "force",
    "presets"
]


accs_list_slot_vars = {

    "suit": {
        "url":0,
        "random": 0,
        "socket": 1,
        "socket1": 1,
        "socket2": 0,
        "socket3":0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "items/costumes/suit",
        "imgx": 0,
        "imgy": 0,
        "imgw": 64,
        "imgh": 64,
        "imgresize":0,
        "name": "Suit Costume",
        "toggle": 1,
        "optimization": 1,
    },

    "hair": {
        "url": 0,
        "random": 0,
        "socket": 1,
        "socket1": 1,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "items/costumes/hair",
        "imgx": 0,
        "imgy": 1,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 0,
        "name": "Hair Costume",
        "toggle": 1,
        "optimization": 1,
    },

    "topcos": {
        "url": 0,
        "random": 0,
        "socket": 1,
        "socket1": 1,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "items/costumes/topcos",
        "imgx": 0,
        "imgy": 2,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 0,
        "name": "Top Costume",
        "toggle": 1,
        "optimization": 1,
    },

    "botcos": {
        "url": 0,
        "random": 0,
        "socket": 1,
        "socket1": 1,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "items/costumes/botcos",
        "imgx": 0,
        "imgy": 3,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 0,
        "name": "Bottom Costume",
        "toggle": 1,
        "optimization": 1,
    },

    "glovescos": {
        "url": 0,
        "random": 0,
        "socket": 1,
        "socket1": 1,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "items/costumes/glovescos",
        "imgx": 0,
        "imgy": 4,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 0,
        "name": "Gloves Costume",
        "toggle": 1,
        "optimization": 1,
    },

    "shoescos": {
        "url": 0,
        "random": 0,
        "socket": 1,
        "socket1": 1,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "items/costumes/shoescos",
        "imgx": 0,
        "imgy": 5,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 0,
        "name": "Shoes Costume",
        "toggle": 1,
        "optimization": 1,
    },

    "wepcos": {
        "url": 0,
        "random": 0,
        "socket": 2,
        "socket1": 2,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "items/costumes/wepcos",
        "imgx": 4,
        "imgy": 0,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 0,
        "name": "Weapon Costume",
        "toggle": 1,
        "optimization": 1,
    },

    "top": {
        "url": 0,
        "random": 3,
        "socket": 31,
        "socket_add": [[0, 9], [14, 16], [32, 18], [36, 31]],
        "socket1": 4,
        "socket2": 12,
        "socket3": 15,
        "enhancement": 1,
        "reforge": 1,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "items/equipment/top",
        "imgx": 1,
        "imgy": 2,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 0,
        "name": "Top",
        "toggle": 1,
        "optimization": 1,
    },

    "bot": {
        "url": 0,
        "random": 3,
        "socket": 31,
        "socket_add": [[0, 9], [14, 16], [32, 18], [36, 31]],
        "socket1": 4,
        "socket2": 12,
        "socket3": 15,
        "enhancement": 1,
        "reforge": 1,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "items/equipment/bot",
        "imgx": 1,
        "imgy": 3,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 0,
        "name": "Bottom",
        "toggle": 1,
        "optimization": 1,
    },

    "gloves": {
        "url": 0,
        "random": 3,
        "socket": 31,
        "socket_add": [[0, 9], [14, 16], [32, 18], [36, 31]],
        "socket1": 4,
        "socket2": 12,
        "socket3": 15,
        "enhancement": 1,
        "reforge": 1,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "items/equipment/gloves",
        "imgx": 1,
        "imgy": 4,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 0,
        "name": "Gloves",
        "toggle": 1,
        "optimization": 1,
    },

    "shoes": {
        "url": 0,
        "random": 3,
        "socket": 31,
        "socket_add": [[0, 9], [14, 16], [32, 18], [36, 31]],
        "socket1": 4,
        "socket2": 12,
        "socket3": 15,
        "enhancement": 1,
        "reforge": 1,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "items/equipment/shoes",
        "imgx": 1,
        "imgy": 5,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 0,
        "name": "Shoes",
        "toggle": 1,
        "optimization": 1,
    },

    "weapon": {
        "url": 0,
        "random": 3,
        "socket": 38,
        "socket1": 6,
        "socket2": 2,
        "socket3":30,
        "enhancement": 1,
        "reforge": 10,
        "imprint": 3,
        "growth": 0,
        "other": 0,
        "img": "items/equipment/weapon",
        "imgx": 5,
        "imgy": 0,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 0,
        "name": "Weapon",
        "toggle": 1,
        "optimization": 1,
    },

    "wepacc": {
        "url": 0,
        "random": 3,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": 0,
        "name": "Weapon Accessory",
        "toggle": 1,
        "optimization": 1,
    },

    "support": {
        "url": 0,
        "random": 3,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": 0,
        "name": "Support Unit",
        "toggle": 1,
        "optimization": 1,
    },

    "facetop": {
        "url": 0,
        "random": 3,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": 0,
        "name": "Face - Top",
        "toggle": 1,
        "optimization": 1,
    },

    "facemid": {
        "url": 0,
        "random": 3,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": 0,
        "name": "Face - Middle",
        "toggle": 1,
        "optimization": 1,
    },

    "facebot": {
        "url": 0,
        "random": 3,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": 0,
        "name": "Face - Bottom",
        "toggle": 1,
        "optimization": 1,
    },

    "faceear": {
        "url": 0,
        "random": 3,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": 0,
        "name": "Face - Earring",
        "toggle": 1,
        "optimization": 1,
    },

    "topacc": {
        "url": 0,
        "random": 3,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": 0,
        "name": "Top Accessory",
        "toggle": 1,
        "optimization": 1,
    },

    "botacc": {
        "url": 0,
        "random": 3,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": 0,
        "name": "Bottom Accessory",
        "toggle": 1,
        "optimization": 1,
    },

    "arm": {
        "url": 0,
        "random": 3,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": 0,
        "name": "Arm",
        "toggle": 1,
        "optimization": 1,
    },

    "neck": {
        "url": 0,
        "random": 3,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": 0,
        "name": "Necklace",
        "toggle": 1,
        "optimization": 1,
    },

    "ring1": {
        "url": 0,
        "random": 3,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": 0,
        "name": "Ring 1",
        "toggle": 1,
        "optimization": 1,
    },

    "ring2": {
        "url": 0,
        "random": 3,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "items/accessories/ring",
        "imgx": 5,
        "imgy": 5,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 0,
        "name": "Ring 2",
        "toggle": 1,
        "optimization": 1,
    },

    "title": {
        "url": 0,
        "random": 0,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 5,
        "img": "titles",
        "imgx": 1,
        "imgy": 0,
        "imgw": 133,
        "imgh": 133,
        "imgresize": 1,
        "name": "Title",
        "toggle": 1
    },

    "pet": {
        "url": 0,
        "random": 0,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "pet",
        "imgx": 2,
        "imgy": 4,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 1,
        "name": "Pet",
        "toggle": 1
    },

    "customization": {
        "url": 0,
        "random": 0,
        "socket": 5,
        "socket1": 5,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": 0,
        "default": 1,
        "name": "Customization",
        "toggle": 1
    },

    "customization_mark": {
        "url": 35,
        "random": 0,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": 0,
        "default": 1,
        "name": "Customization Mark",
        "toggle": 1
    },

    "artifact": {
        "url": 3,
        "random": 0,
        "socket": 3,
        "socket1": 3,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 1,
        "other": 0,
        "img": 0,
        "default": 1,
        "name": "Artifact",
        "toggle": 1
    },

    "artifact_circlet": {
        "url": 3,
        "random": 0,
        "socket": 3,
        "socket_add": [[3,2], [12,3]],
        "socket1": 2,
        "socket2": 1,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": 0,
        "name": "Artifact Circlet"
    },

    "artifact_armor": {
        "url": 3,
        "random": 0,
        "socket": 3,
        "socket_add": [[3, 2], [12, 3]],
        "socket1": 2,
        "socket2": 1,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": 0,
        "name": "Artifact Armor"
    },

    "artifact_neck": {
        "url": 3,
        "random": 0,
        "socket": 3,
        "socket_add": [[3, 2], [12, 3]],
        "socket1": 2,
        "socket2": 1,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": 0,
        "name": "Artifact Necklace"
    },

    "artifact_ring1": {
        "url": 3,
        "random": 0,
        "socket": 3,
        "socket_add": [[3, 2], [12, 3]],
        "socket1": 2,
        "socket2": 1,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": 0,
        "name": "Artifact Ring"
    },

    "artifact_ring2": {
        "url": 3,
        "random": 0,
        "socket": 3,
        "socket_add": [[3, 2], [12, 3]],
        "socket1": 2,
        "socket2": 1,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": 0,
        "name": "Artifact Ring"
    },

    "wepacc_ib": {
        "url": 38,
        "random": 0,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "items/accessories/wepacc",
        "imgx": 3,
        "imgy": 0,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 0,
        "name": "Weapon Accessory IB",
        "img_backup": "wepacc"
    },

    "support_ib": {
        "url": 37,
        "random": 0,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "items/accessories/support",
        "imgx": 3,
        "imgy": 1,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 0,
        "name": "Support Unit IB",
        "img_backup": "support"
    },

    "facetop_ib": {
        "url": 37,
        "random": 0,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "items/accessories/facetop",
        "imgx": 4,
        "imgy": 1,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 0,
        "name": "Face - Top IB",
        "img_backup": "facetop"
    },

    "facemid_ib": {
        "url": 37,
        "random": 0,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "items/accessories/facemid",
        "imgx": 4,
        "imgy": 2,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 0,
        "name": "Face - Middle IB",
        "img_backup": "facemid"
    },

    "facebot_ib": {
        "url": 37,
        "random": 0,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "items/accessories/facebot",
        "imgx": 4,
        "imgy": 3,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 0,
        "name": "Face - Bottom IB",
        "img_backup": "facebot"
    },

    "faceear_ib": {
        "url": 37,
        "random": 0,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "items/accessories/faceear",
        "imgx": 4,
        "imgy": 4,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 0,
        "name": "Face - Earring IB",
        "img_backup": "faceear"
    },

    "topacc_ib": {
        "url": 37,
        "random": 0,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "items/accessories/topacc",
        "imgx": 5,
        "imgy": 1,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 0,
        "name": "Top Accessory IB",
        "img_backup": "topacc"
    },

    "botacc_ib": {
        "url": 37,
        "random": 0,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "items/accessories/botacc",
        "imgx": 5,
        "imgy": 2,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 0,
        "name": "Bottom Accessory IB",
        "img_backup": "botacc"
    },

    "arm_ib": {
        "url": 37,
        "random": 0,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "items/accessories/arm",
        "imgx": 5,
        "imgy": 3,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 0,
        "name": "Arm IB",
        "img_backup": "arm"
    },

    "neck_ib": {
        "url": 37,
        "random": 0,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "items/accessories/neck",
        "imgx": 5,
        "imgy": 4,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 0,
        "name": "Necklace IB",
        "img_backup": "neck"
    },

    "ring_ib": {
        "url": 37,
        "random": 0,
        "socket": 0,
        "socket1": 0,
        "socket2": 0,
        "socket3": 0,
        "enhancement": 0,
        "reforge": 0,
        "imprint": 0,
        "growth": 0,
        "other": 0,
        "img": "items/accessories/ring",
        "imgx": 4,
        "imgy": 5,
        "imgw": 64,
        "imgh": 64,
        "imgresize": 0,
        "name": "Ring IB",
        "img_backup": "ring1"
    },

}

accs_list_stat = [
    {
        "long_name": "Physical Attack",
        "short_name": "patk",
        "type": "base",
        "regular": true,
        "manual": true
    },
    {
        "long_name": "Magical Attack",
        "short_name": "matk",
        "type": "base",
        "regular": true,
        "manual": true
    },
    {
        "long_name": "Physical Defense",
        "short_name": "pdef",
        "type": "base",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Magical Defense",
        "short_name": "mdef",
        "type": "base",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "HP",
        "short_name": "hpflat",
        "type": "base",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "HP Increase",
        "short_name": "hp",
        "type": "hp_lvl",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Critical",
        "short_name": "crit",
        "type": "percent",
        "regular": true,
        "manual": true,
    },
    {
        "long_name": "Maximize",
        "short_name": "maxi",
        "type": "percent",
        "regular": true,
        "manual": true,
        "cp":0.5
    },
    {
        "long_name": "Add. Damage",
        "short_name": "add",
        "type": "percent",
        "regular": true,
        "manual": true,
        "cp": 0.4
    },
    {
        "long_name": "Red. Damage",
        "short_name": "red",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Awk. Charge",
        "short_name": "awkc",
        "type": "percent",
        "regular": true,
        "manual": false,
        "cp": 0.13
    },
    {
        "long_name": "Awk. Time",
        "short_name": "awkt",
        "type": "percent",
        "regular": true,
        "manual": false,
        "cp": 0.13
    },
    {
        "long_name": "MP Gain (Attack)",
        "short_name": "mpattack",
        "type": "percent",
        "regular": true,
        "manual": false,
        "cp": 0.04
    },
    {
        "long_name": "MP Gain (Attacked)",
        "short_name": "mpattacked",
        "type": "percent",
        "regular": true,
        "manual": false,
        "cp": 0.02
    },
    {
        "long_name": "Action Speed",
        "short_name": "as",
        "type": "percent",
        "regular": true,
        "manual": false,
        "cp_special": 0.25
    },
    {
        "long_name": "Movement Speed",
        "short_name": "ms",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Jump Speed",
        "short_name": "js",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Physical Attack %",
        "short_name": "patk%",
        "type": "percent",
        "regular": true,
        "manual": true
    },
    {
        "long_name": "Magical Attack %",
        "short_name": "matk%",
        "type": "percent",
        "regular": true,
        "manual": true
    },
    {
        "long_name": "Physical Defense %",
        "short_name": "pdef%",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Magical Defense %",
        "short_name": "mdef%",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Boss Damage Reduction",
        "short_name": "bossred",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Boss Damage Reduction",
        "short_name": "bossred_m",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Flexibility Skill Damage",
        "short_name": "flex",
        "type": "percent",
        "regular": true,
        "manual": true,
        "cp_special": 0.105,
        "pvp_reduction": 0.4
    },
    {
        "long_name": "Tenacity Skill Damage",
        "short_name": "tena",
        "type": "percent",
        "regular": true,
        "manual": true,
        "cp_special": 0.28,
        "pvp_reduction": 0.4
    },
    {
        "long_name": "Strength Skill Damage",
        "short_name": "strength",
        "type": "percent",
        "regular": true,
        "manual": true,
        "cp_special": 0.35,
        "pvp_reduction": 0.4
    },
    {
        "long_name": "Bravery Skill Damage",
        "short_name": "brave",
        "type": "percent",
        "regular": true,
        "manual": true,
        "cp_special": 0.35,
        "pvp_reduction": 0.4
    },
    {
        "long_name": "Hyperactive Skill Damage",
        "short_name": "hyper",
        "type": "percent",
        "regular": true,
        "manual": true
    },
    {
        "long_name": "Critical Damage",
        "short_name": "critdmg",
        "type": "percent",
        "regular": true,
        "manual": true,
        "pvp_reduction":0.4
    },
    {
        "long_name": "All Skill Damage",
        "short_name": "alldmg",
        "type": "percent",
        "regular": true,
        "manual": true,
        "cp": 1,
        "pvp_reduction": 0.4
    },
    {
        "long_name": "Special Skill Damage",
        "short_name": "specialdmg",
        "type": "percent",
        "regular": true,
        "manual": false,
        "pvp_reduction": 0.4
    },
    {
        "long_name": "MP Cost Decrease",
        "short_name": "mpr",
        "type": "percent",
        "regular": true,
        "manual": false,
        "cp": 0.34,
        "pvp_reduction": 0.4
    },
    {
        "long_name": "Master MP Cost Decrease",
        "short_name": "mastermpr",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "All Skill Cooldown Reset Chance",
        "short_name": "cdrc",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Flexibility Cooldown Reset Chance",
        "short_name": "flexcdrc",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Tenacity Cooldown Reset Chance",
        "short_name": "tenacdrc",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Strength Cooldown Reset Chance",
        "short_name": "strengthcdrc",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Bravery Cooldown Reset Chance",
        "short_name": "bravecdrc",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Hyper Cooldown Reset Chance",
        "short_name": "hypercdrc",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Master Cooldown Reset Chance",
        "short_name": "mastercdrc",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "All Skill Cooldown Decrease",
        "short_name": "cdr",
        "type": "percent",
        "regular": true,
        "manual": false,
        "cp_special": 0.2,
        "pvp_reduction": 0.4
    },
    {
        "long_name": "Flexibility Cooldown Decrease",
        "short_name": "flexcdr",
        "type": "percent",
        "regular": true,
        "manual": false,
        "cp_special": 0.025,
        "pvp_reduction": 0.4
    },
    {
        "long_name": "Tenacity Cooldown Decrease",
        "short_name": "tenacdr",
        "type": "percent",
        "regular": true,
        "manual": false,
        "cp_special": 0.066,
        "pvp_reduction": 0.4
    },
    {
        "long_name": "Strength Cooldown Decrease",
        "short_name": "strengthcdr",
        "type": "percent",
        "regular": true,
        "manual": false,
        "cp_special": 0.08,
        "pvp_reduction": 0.4
    },
    {
        "long_name": "Bravery Cooldown Decrease",
        "short_name": "bravecdr",
        "type": "percent",
        "regular": true,
        "manual": false,
        "cp_special": 0.08,
        "pvp_reduction": 0.4
    },
    {
        "long_name": "Hyper Cooldown Decrease",
        "short_name": "hypercdr",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Master Skill Cooldown Decrease",
        "short_name": "mastercdr",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Master Skill Size Increase",
        "short_name": "mastersize",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Maximum MP",
        "short_name": "maxmp",
        "type": "base",
        "regular": true,
        "manual": false,
        "cp": 0.037
    },
    {
        "long_name": "Maximum MP %",
        "short_name": "maxmp%",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Maximum MP ERP",
        "short_name": "maxmp_erp",
        "type": "base",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Double Attack Chance",
        "short_name": "doubleatk",
        "type": "percent",
        "regular": true,
        "manual": true
    },
    {
        "long_name": "Additional Damage Resistance",
        "short_name": "addres",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Critical Resistance",
        "short_name": "critres",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Adaptation",
        "short_name": "adapt",
        "type": "percent",
        "regular": true,
        "manual": true,
        "cp": 1
    },
    {
        "long_name": "Boss Damage",
        "short_name": "bossdmg",
        "type": "percent",
        "regular": true,
        "manual": true,
        "cp": 0.4
    },
    {
        "long_name": "Non-Boss Damage",
        "short_name": "nonbossdmg",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Air Damage",
        "short_name": "airdmg",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Attack/Attacked Damage",
        "short_name": "aadmg",
        "type": "percent",
        "regular": true,
        "manual": true,
        "cp": 1,
        "pvp_reduction": 0
    },
    {
        "long_name": "Physical Defense Ignore",
        "short_name": "pdefignore",
        "type": "percent",
        "regular": true,
        "manual": true,
        "cp_special": 0.92
    },
    {
        "long_name": "Magical Defense Ignore",
        "short_name": "mdefignore",
        "type": "percent",
        "regular": true,
        "manual": true,
        "cp_special": 0.92
    },
    {
        "long_name": "Master Skill Defense Ignore",
        "short_name": "masterdefignore",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "All Defense for 5 seconds upon attacking (10 Stacks)",
        "short_name": "defstack",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Physical Defense Reduction",
        "short_name": "pdefreduction",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Magical Defense Reduction",
        "short_name": "mdefreduction",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Physical Defense Ignore (Trait)",
        "short_name": "pdefignoretrait",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Magical Defense Ignore (Trait)",
        "short_name": "mdefignoretrait",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Master Physical Defense Reduction",
        "short_name": "masterpdefreduction",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Master Magical Defense Reduction",
        "short_name": "mastermdefreduction",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Master Skill Defense Pierce",
        "short_name": "masterdefpierce",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Master Physical Defense Pierce",
        "short_name": "masterpdefpierce",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Master Magical Defense Pierce",
        "short_name": "mastermdefpierce",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Physical Defense Pierce",
        "short_name": "pdefpierce",
        "type": "percent",
        "regular": true,
        "manual": true
    },
    {
        "long_name": "Magical Defense Pierce",
        "short_name": "mdefpierce",
        "type": "percent",
        "regular": true,
        "manual": true
    },
    {
        "long_name": "Physical Defense Reduction - Pierce",
        "short_name": "pdefreductionpierce",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Magical Defense Reduction - Pierce",
        "short_name": "mdefreductionpierce",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Master Physical Defense Reduction - Pierce",
        "short_name": "masterpdefreductionpierce",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Master Magical Defense Reduction - Pierce",
        "short_name": "mastermdefreductionpierce",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "100% Physical Defense Ignore Chance",
        "short_name": "pdefignorechance",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "100% Magical Defense Ignore Chance",
        "short_name": "mdefignorechance",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Item Drop Rate",
        "short_name": "idr",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Exp Gain",
        "short_name": "exp",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Artifact Exp Gain",
        "short_name": "expartifact",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "ED Gain",
        "short_name": "ed",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Guild Honor",
        "short_name": "guild",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Recovery Item Effect",
        "short_name": "recitem",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Recovery Item Cooldown Decrease",
        "short_name": "recitemcdr",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Debuff Duration Decrease",
        "short_name": "debuff",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Damage against <10% HP",
        "short_name": "dmg10",
        "type": "percent",
        "regular": true,
        "manual": true
    },
    {
        "long_name": "Damage against <30% HP",
        "short_name": "dmg30",
        "type": "percent",
        "regular": true,
        "manual": true
    },
    {
        "long_name": "Damage against >50% HP",
        "short_name": "dmg50+",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Damage against <50% HP",
        "short_name": "dmg50",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Damage against <100% HP",
        "short_name": "dmg100",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Red. Damage <30%",
        "short_name": "red30",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Damage to Knocked Down Enemy",
        "short_name": "dmgkd",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Damage in proportion to HP lost",
        "short_name": "dmghplost",
        "type": "percent",
        "regular": true,
        "manual": true
    },
    {
        "long_name": "Skill Cooldown Time upon defeating a Supreme Monster",
        "short_name": "cdrsupreme",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Skill Cooldown Time after 10th attack",
        "short_name": "cdr10",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Physical Attack Level",
        "short_name": "patk_lvl",
        "type": "flat",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Magical Attack Level",
        "short_name": "matk_lvl",
        "type": "flat",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Physical Defense Level",
        "short_name": "pdef_lvl",
        "type": "flat",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Magical Defense Level",
        "short_name": "mdef_lvl",
        "type": "flat",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Physical Attack Minimum",
        "short_name": "patk_min",
        "type": "base",
        "regular": false,
        "manual": true
    },
    {
        "long_name": "Magical Attack Minimum",
        "short_name": "matk_min",
        "type": "base",
        "regular": false,
        "manual": true
    },
    {
        "long_name": "Physical Attack Maximum",
        "short_name": "patk_max",
        "type": "base",
        "regular": false,
        "manual": true
    },
    {
        "long_name": "Magical Attack Maximum",
        "short_name": "matk_max",
        "type": "base",
        "regular": false,
        "manual": true
    },
    {
        "long_name": "Physical Attack Minimum after Maximize",
        "short_name": "patk_min_maxi",
        "type": "base",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Magical Attack Minimum after Maximize",
        "short_name": "matk_min_maxi",
        "type": "base",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Physical Attack Maximum after Maximize",
        "short_name": "patk_max_maxi",
        "type": "base",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Magical Attack Maximum after Maximize",
        "short_name": "matk_max_maxi",
        "type": "base",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Physical Defense Damage Reduction",
        "short_name": "pdef_red",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Magical Defense Damage Reduction",
        "short_name": "mdef_red",
        "type": "percent",
        "regular": false,
        "manual": false
    },

    {
        "long_name": "Buff - Critical",
        "short_name": "buffcrit",
        "type": "percent",
        "regular": true,
        "manual": false,
        "buff": 43
    },
    {
        "long_name": "Buff - Physical Attack Power",
        "short_name": "buffpatk",
        "type": "percent",
        "regular": true,
        "manual": false,
        "cp": 1,
        "buff": 40
    },
    {
        "long_name": "Buff - Magical Attack Power",
        "short_name": "buffmatk",
        "type": "percent",
        "regular": true,
        "manual": false,
        "cp": 1,
        "buff": 41
    },
    {
        "long_name": "Buff - Attack Speed",
        "short_name": "buffas",
        "type": "percent",
        "regular": true,
        "manual": false,
        "buff": 42
    },
    {
        "long_name": "Buff - Maximize",
        "short_name": "buffmaxi",
        "type": "percent",
        "regular": true,
        "manual": false,
        "buff": 45
    },
    {
        "long_name": "Buff - Party's Critical",
        "short_name": "partycrit",
        "type": "percent",
        "regular": true,
        "manual": false,
        "buff": 43
    },
    {
        "long_name": "Buff - Party's Physical Attack Power",
        "short_name": "partypatk",
        "type": "percent",
        "regular": true,
        "manual": false,
        "cp": 1,
        "buff": 40
    },
    {
        "long_name": "Buff - Party's Magical Attack Power",
        "short_name": "partymatk",
        "type": "percent",
        "regular": true,
        "manual": false,
        "cp": 1,
        "buff": 41
    },
    {
        "long_name": "Buff - Party's Physical Defense Power",
        "short_name": "partypdef",
        "type": "percent",
        "regular": true,
        "manual": false,
        "buff": 48
    },
    {
        "long_name": "Buff - Party's Magical Defense Power",
        "short_name": "partymdef",
        "type": "percent",
        "regular": true,
        "manual": false,
        "buff": 49
    },
    {
        "long_name": "Buff - Party's Damage Reduction",
        "short_name": "partyred",
        "type": "percent",
        "regular": true,
        "manual": false,
        "buff": 47
    },
    {
        "long_name": "Buff - Party's Attack Speed",
        "short_name": "partyas",
        "type": "percent",
        "regular": true,
        "manual": false,
        "buff": 42
    },
    {
        "long_name": "Buff - Party's Movement Speed",
        "short_name": "partyms",
        "type": "percent",
        "regular": true,
        "manual": false,
        "buff": 438
    },
    {
        "long_name": "Buff - Party's Additional Damage",
        "short_name": "partyadd",
        "type": "percent",
        "regular": true,
        "manual": false,
        "buff": 44
    },
    {
        "long_name": "Buff - Party's Maximize",
        "short_name": "partymaxi",
        "type": "percent",
        "regular": true,
        "manual": false,
        "buff": 45
    },
    {
        "long_name": "Buff - Party's All Skill Damage",
        "short_name": "partyalldmg",
        "type": "percent",
        "regular": true,
        "manual": false,
        "buff": 252
    },
    {
        "long_name": "Buff - Party's Critical Damage",
        "short_name": "partycritdmg",
        "type": "percent",
        "regular": true,
        "manual": false,
        "buff": 253
    },
    {
        "long_name": "Every 30 seconds, for a duration of n seconds, increase All Skill Damage",
        "short_name": "tenebrous_asd",
        "type": "percent",
        "regular": true,
        "manual": false,
        "buff": 439
    },
    {
        "long_name": "Transcendence Skill Slot damage is increased",
        "short_name": "tenebrous_awk_dmg",
        "type": "percent",
        "regular": true,
        "manual": false,
        "buff": 440
    },
    {
        "long_name": "Damage against &lt;N% HP",
        "short_name": "tenebrous_enemyhp_dmg",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Additional Continuous Damage over 3 sec",
        "short_name": "acdmg",
        "type": "percent",
        "regular": true,
        "manual": false,
        "pvp_reduction": 0
    },
    {
        "long_name": "Specific Skill Damage",
        "short_name": "specific",
        "type": "percent",
        "regular": true,
        "manual": true
    },
    {
        "long_name": "Command Attack Damage",
        "short_name": "command",
        "type": "percent",
        "regular": true,
        "manual": true,
        "pvp_reduction": 0.4
    },
    {
        "long_name": "Master Skill Damage",
        "short_name": "master",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Upon using Flexibility Skill, Flexibility Skill's Damage for 10 seconds (5 Stacks)",
        "short_name": "flexstack",
        "type": "percent",
        "regular": true,
        "manual": false,
        "buff": 50
    },
    {
        "long_name": "Upon using Tenacity Skill, Tenacity Skill's Damage for 10 seconds (5 Stacks)",
        "short_name": "tenastack",
        "type": "percent",
        "regular": true,
        "manual": false,
        "buff": 50
    },
    {
        "long_name": "Upon using Strength Skill, Strength Skill's Damage for 10 seconds (5 Stacks)",
        "short_name": "strengthstack",
        "type": "percent",
        "regular": true,
        "manual": false,
        "buff": 50
    },
    {
        "long_name": "Upon using Bravery Skill, Brave Skill's Damage for 10 seconds (5 Stacks)",
        "short_name": "bravestack",
        "type": "percent",
        "regular": true,
        "manual": false,
        "buff": 50
    },
    {
        "long_name": "Fire Weapon Element",
        "short_name": "elemfir",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Water Weapon Element",
        "short_name": "elemwat",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Nature Weapon Element",
        "short_name": "elemnat",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Wind Weapon Element",
        "short_name": "elemwin",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Light Weapon Element",
        "short_name": "elemlig",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Dark Weapon Element",
        "short_name": "elemdar",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "All Weapon Elements",
        "short_name": "elemall",
        "type": "percent",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "All Weapon Elements",
        "short_name": "elemall_m",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Fire Resist",
        "short_name": "resfir",
        "type": "flat",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Water Resist",
        "short_name": "reswat",
        "type": "flat",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Nature Resist",
        "short_name": "resnat",
        "type": "flat",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Wind Resist",
        "short_name": "reswin",
        "type": "flat",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Light Resist",
        "short_name": "reslig",
        "type": "flat",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "Dark Resist",
        "short_name": "resdar",
        "type": "flat",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "All Resists",
        "short_name": "resall",
        "type": "flat",
        "regular": true,
        "manual": false
    },
    {
        "long_name": "All Resists",
        "short_name": "resall_a",
        "type": "flat",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Physical Attack",
        "short_name": "patk%_pas",
        "type": "percent",
        "regular": false,
        "manual": true
    },
    {
        "long_name": "Magical Attack",
        "short_name": "matk%_pas",
        "type": "percent",
        "regular": false,
        "manual": true
    },
    {
        "long_name": "Physical Defense",
        "short_name": "pdef%_pas",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Magical Defense",
        "short_name": "mdef%_pas",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "HP",
        "short_name": "hp%_pas",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "HP",
        "short_name": "hp_base",
        "type": "base",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Critical",
        "short_name": "crit_n",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Maximize",
        "short_name": "maxi_n",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Add. Damage",
        "short_name": "add_n",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Red. Damage",
        "short_name": "red_n",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Awk. Charge",
        "short_name": "awkc_n",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Awk. Time",
        "short_name": "awkt_n",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "MP Gain (Attack)",
        "short_name": "mpattack_n",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "MP Gain (Attacked)",
        "short_name": "mpattacked_n",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Attack Speed",
        "short_name": "as_n",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Movement Speed",
        "short_name": "ms_n",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Jump Speed",
        "short_name": "js_n",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Critical",
        "short_name": "crit_u",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Maximize",
        "short_name": "maxi_u",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Add. Damage",
        "short_name": "add_u",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Red. Damage",
        "short_name": "red_u",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Awk. Charge",
        "short_name": "awkc_u",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Awk. Time",
        "short_name": "awkt_u",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "MP Gain (Attack)",
        "short_name": "mpattack_u",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "MP Gain (Attacked)",
        "short_name": "mpattacked_u",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Attack Speed",
        "short_name": "as_u",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Movement Speed",
        "short_name": "ms_u",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Jump Speed",
        "short_name": "js_u",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Critical",
        "short_name": "crit_m",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Maximize",
        "short_name": "maxi_m",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Add. Damage",
        "short_name": "add_m",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Action Speed",
        "short_name": "as_m",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Movement Speed",
        "short_name": "ms_m",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Jump Speed",
        "short_name": "js_m",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Awk. Charge",
        "short_name": "awkc_m",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Awk. Time",
        "short_name": "awkt_m",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "MP Gain (Attack)",
        "short_name": "mpattack_m",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "MP Gain (Attacked)",
        "short_name": "mpattacked_m",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Red. Damage",
        "short_name": "red_m",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Critical Damage",
        "short_name": "critdmg_a",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Critical Damage",
        "short_name": "critdmg_m",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Physical Attack",
        "short_name": "patk_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Magical Attack",
        "short_name": "matk_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Critical Damage",
        "short_name": "crit_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Maximize Damage Physical",
        "short_name": "maxi_patk_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Maximize Damage Magical",
        "short_name": "maxi_matk_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Add. Damage Physical",
        "short_name": "add_patk_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Add. Damage Magical",
        "short_name": "add_matk_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Damage",
        "short_name": "dmg_mod",
        "type": "percent",
        "regular": false,
        "manual": true
    },
    {
        "long_name": "Damage",
        "short_name": "awk_dmg_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Damage",
        "short_name": "trait_dmg_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Attack/Attacked Damage",
        "short_name": "aadmg_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Additional Continuous Damage over 3 sec",
        "short_name": "acdmg_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "All Skill Damage",
        "short_name": "alldmg_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Special Active Damage",
        "short_name": "specialdmg_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "MP Cost Decrease",
        "short_name": "mpr_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "All Skill Cooldown Decrease",
        "short_name": "cdr_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "All Skill Cooldown Reset Chance",
        "short_name": "cdrc_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Command Attack Damage",
        "short_name": "command_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Flexibility Skill Damage",
        "short_name": "flex_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Tenacity Skill Damage",
        "short_name": "tena_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Strength Skill Damage",
        "short_name": "strength_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Bravery Skill Damage",
        "short_name": "brave_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Hyperactive Skill Damage",
        "short_name": "hyper_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Specific Flexibility Skill Damage",
        "short_name": "specificflex_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Specific Tenacity Skill Damage",
        "short_name": "specifictena_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Specific Strength Skill Damage",
        "short_name": "specificstrength_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Specific Bravery SKill Damage",
        "short_name": "specificbrave_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Specific Hyperactive Skill Damage",
        "short_name": "specifichyper_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Master Skill Damage",
        "short_name": "master_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Boss Damage",
        "short_name": "bossdmg_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Non-Boss Damage",
        "short_name": "nonbossdmg_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Air Damage",
        "short_name": "airdmg_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Damage against <10%",
        "short_name": "dmg10_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Damage against <30%",
        "short_name": "dmg30_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Damage against >50%",
        "short_name": "dmg50+_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Damage against <50%",
        "short_name": "dmg50_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Damage against <100%",
        "short_name": "dmg100_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Damage against <X%",
        "short_name": "tenebrous_enemyhp_dmg_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Damage increase in proportion to HP lost",
        "short_name": "dmghplost_mod",
        "type": "percent",
        "regular": false,
        "manual": false
    }, 
    {
        "long_name": "Critical Reversed",
        "short_name": "crit_r",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Critical Reversed 100%",
        "short_name": "crit_r_100",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Critical Reversed 86%",
        "short_name": "crit_r_86",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Critical Reversed 68%",
        "short_name": "crit_r_68",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Critical Reversed 40%",
        "short_name": "crit_r_40",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Critical Reversed",
        "short_name": "crit_r_u",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Critical Reversed",
        "short_name": "crit_r_n",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Critical Reversed",
        "short_name": "crit_r_m",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Critical Reversed",
        "short_name": "crit_r_over",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Critical Reversed 100%",
        "short_name": "crit_r_over_100",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Critical Reversed 86%",
        "short_name": "crit_r_over_86",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Critical Reversed 68%",
        "short_name": "crit_r_over_68",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Critical Reversed 40%",
        "short_name": "crit_r_over_40",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Maximize Reversed",
        "short_name": "maxi_r",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Maximize Reversed 100%",
        "short_name": "maxi_r_100",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Maximize Reversed 90%",
        "short_name": "maxi_r_90",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Maximize Reversed 70%",
        "short_name": "maxi_r_70",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Maximize Reversed 40%",
        "short_name": "maxi_r_40",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Maximize Reversed",
        "short_name": "maxi_r_u",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Maximize Reversed",
        "short_name": "maxi_r_n",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Maximize Reversed",
        "short_name": "maxi_r_m",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Maximize Reversed",
        "short_name": "maxi_r_over",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Maximize Reversed 100%",
        "short_name": "maxi_r_over_100",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Maximize Reversed 90%",
        "short_name": "maxi_r_over_90",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Maximize Reversed 70%",
        "short_name": "maxi_r_over_70",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "Maximize Reversed 40%",
        "short_name": "maxi_r_over_40",
        "type": "percent",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "",
        "short_name": "blank",
        "type": "flat",
        "regular": false,
        "manual": false
    },
    {
        "long_name": "",
        "short_name": "blank%",
        "type": "percent",
        "regular": false,
        "manual": false
    }


]

accs_list_manual = [
    "patk", "matk", "patk_min", "patk_max", "matk_min", "matk_max",
    "patk%", "matk%", "patk%_pas", "matk%_pas",
    "crit", "maxi", "add",
    "flex", "tena", "strength", "brave", "hyper", "critdmg", "alldmg", "specific", "command",
    "doubleatk", "adapt", "bossdmg", "aadmg", "dmg30", "dmghplost",
    "pdefignore", "mdefignore", "pdefpierce", "mdefpierce",
    "dmg_mod"
]


accs_list_combined = [
    { "main": "resall", "children": ["resfir", "reswat", "resnat", "reswin", "reslig", "resdar"] },
    { "main": "cdr", "children": ["flexcdr", "tenacdr", "strengthcdr", "bravecdr"] },
    { "main": "cdrc", "children": ["flexcdrc", "tenacdrc", "strengthcdrc", "bravecdrc"] },
    { "main": "elemall", "children": ["elemfir", "elemwat", "elemnat", "elemwin", "elemlig", "elemdar"] },
    { "main": "specialdmg", "children": ["tena", "strength", "brave"] },
]

accs_list_stat_transform = {

    "pvp": [
        { "stat": "critdmg", "change": "times", "mods": [0.4] },
        { "stat": "flex", "change": "times", "mods": [0.4] },
        { "stat": "tena", "change": "times", "mods": [0.4] },
        { "stat": "strength", "change": "times", "mods": [0.4] },
        { "stat": "brave", "change": "times", "mods": [0.4] },
        { "stat": "alldmg", "change": "times", "mods": [0.4] },
        { "stat": "specific", "change": "times", "mods": [0.4] },
        { "stat": "command", "change": "times", "mods": [0.4] },
        { "stat": "mpr", "change": "times", "mods": [0.4] },
        { "stat": "cdr", "change": "times", "mods": [0.4] },
        { "stat": "flex", "change": "times", "mods": [0.4] },
        { "stat": "tenacdr", "change": "times", "mods": [0.4] },
        { "stat": "strengthcdr", "change": "times", "mods": [0.4] },
        { "stat": "bravecdr", "change": "times", "mods": [0.4] },
        { "stat": "aadmg", "change": "times", "mods": [0] },
        { "stat": "acdmg", "change": "times", "mods": [0] },
    ],

    //add

    "hidden_n": [
        { "stat": "patk", "change": "minimum", "value": 0.01 },
        { "stat": "matk", "change": "minimum", "value": 0.01 },

        { "stat": "crit", "change": "add", "mods": ["crit_n"] },
        { "stat": "maxi", "change": "add", "mods": ["maxi_n"] },
        { "stat": "add", "change": "add", "mods": ["add_n"] },
        { "stat": "red", "change": "add", "mods": ["red_n"] },
        { "stat": "awkc", "change": "add", "mods": ["awkc_n"] },
        { "stat": "awkt", "change": "add", "mods": ["awkt_n"] },
        { "stat": "mpattack", "change": "add", "mods": ["mpattack_n"] },
        { "stat": "mpattacked", "change": "add", "mods": ["mpattacked_n"] },
        { "stat": "as", "change": "add", "mods": ["as_n"] },
        { "stat": "ms", "change": "add", "mods": ["ms_n"] },
        { "stat": "js", "change": "add", "mods": ["js_n"] },
        { "stat": "critdmg_a", "change": "add", "mods": [150] },
        { "stat": "critdmg_a", "change": "mult", "mods": ["critdmg_m"] },
    ],

    "cap_n": [
        { "stat": "aadmg", "change": "cap", "mods": [55] },
        { "stat": "adapt", "change": "cap", "mods": [55] },
        { "stat": "bossred", "change": "cap", "mods": [45] },
        { "stat": "mpr", "change": "cap", "mods": [35] },
        { "stat": "mastermpr", "change": "cap", "mods": [35] },
        { "stat": "flexcdr", "change": "cap", "mods": [35] },
        { "stat": "tenacdr", "change": "cap", "mods": [35] },
        { "stat": "strengthcdr", "change": "cap", "mods": [35] },
        { "stat": "bravecdr", "change": "cap", "mods": [35] },
        { "stat": "pdefignore", "change": "cap", "mods": [20] },
        { "stat": "mdefignore", "change": "cap", "mods": [20] },
    ],

    "final_n": [
        { "stat": "patk_mod", "change": "add", "mods": [100] },
        { "stat": "matk_mod", "change": "add", "mods": [100] },

        { "stat": "add_patk_mod", "change": "add", "mods": ["patk"] },
        { "stat": "add_patk_mod", "change": "mult", "mods": ["patk%_pas"] },
        { "stat": "add_matk_mod", "change": "add", "mods": ["matk"] },
        { "stat": "add_matk_mod", "change": "mult", "mods": ["matk%_pas"] },

        { "stat": "dmg_mod", "change": "add", "mods": [100] },
        { "stat": "trait_dmg_mod", "change": "add", "mods": [100] },
        { "stat": "awk_dmg_mod", "change": "add", "mods": [100] },
        { "stat": "aadmg_mod", "change": "add", "mods": [100] },
        { "stat": "acdmg_mod", "change": "add", "mods": [100] },
        { "stat": "alldmg_mod", "change": "add", "mods": [100] },
        { "stat": "specialdmg_mod", "change": "add", "mods": [100] },
        { "stat": "command_mod", "change": "add", "mods": [100] },
        { "stat": "flex_mod", "change": "add", "mods": [100] },
        { "stat": "tena_mod", "change": "add", "mods": [100] },
        { "stat": "strength_mod", "change": "add", "mods": [100] },
        { "stat": "brave_mod", "change": "add", "mods": [100] },
        { "stat": "hyper_mod", "change": "add", "mods": [100] },
        { "stat": "master_mod", "change": "add", "mods": [100] },

        { "stat": "bossdmg_mod", "change": "add", "mods": [100] },
        { "stat": "nonbossdmg_mod", "change": "add", "mods": [100] },
        { "stat": "airdmg_mod", "change": "add", "mods": [100] },
        { "stat": "dmg10_mod", "change": "add", "mods": [100] },
        { "stat": "dmg30_mod", "change": "add", "mods": [100] },
        { "stat": "dmg50+_mod", "change": "add", "mods": [100] },
        { "stat": "dmg50_mod", "change": "add", "mods": [100] },
        { "stat": "dmg100_mod", "change": "add", "mods": [100] },
        { "stat": "tenebrous_enemyhp_dmg_mod", "change": "add", "mods": [100] },
        { "stat": "dmghplost_mod", "change": "add", "mods": [100] },

        { "stat": "aadmg_mod", "change": "mult", "mods": ["aadmg"] },
        { "stat": "acdmg_mod", "change": "mult", "mods": ["acdmg"] },
        { "stat": "alldmg_mod", "change": "mult", "mods": ["alldmg"] },
        { "stat": "command_mod", "change": "mult", "mods": ["command"] },
        { "stat": "flex_mod", "change": "mult", "mods": ["flex"] },
        { "stat": "tena_mod", "change": "mult", "mods": ["tena"] },
        { "stat": "strength_mod", "change": "mult", "mods": ["strength"] },
        { "stat": "brave_mod", "change": "mult", "mods": ["brave"] },
        { "stat": "hyper_mod", "change": "mult", "mods": ["hyper"] },
        { "stat": "master_mod", "change": "mult", "mods": ["master"] },
        { "stat": "specificflex_mod", "change": "add", "mods": ["flex_mod"] },
        { "stat": "specifictena_mod", "change": "add", "mods": ["tena_mod"] },
        { "stat": "specificstrength_mod", "change": "add", "mods": ["strength_mod"] },
        { "stat": "specificbrave_mod", "change": "add", "mods": ["brave_mod"] },
        { "stat": "specifichyper_mod", "change": "add", "mods": ["hyper_mod"] },
        { "stat": "specificflex_mod", "change": "add", "mods": ["specific"] },
        { "stat": "specifictena_mod", "change": "add", "mods": ["specific"] },
        { "stat": "specificstrength_mod", "change": "add", "mods": ["specific"] },
        { "stat": "specificbrave_mod", "change": "add", "mods": ["specific"] },
        { "stat": "specifichyper_mod", "change": "add", "mods": ["specific"] },
        { "stat": "bossdmg_mod", "change": "mult", "mods": ["bossdmg"] },
        { "stat": "nonbossdmg_mod", "change": "mult", "mods": ["nonbossdmg"] },
        { "stat": "airdmg_mod", "change": "mult", "mods": ["airdmg"] },
        { "stat": "dmg10_mod", "change": "mult", "mods": ["dmg10"] },
        { "stat": "dmg30_mod", "change": "mult", "mods": ["dmg30"] },
        { "stat": "dmg50+_mod", "change": "mult", "mods": ["dmg50+"] },
        { "stat": "dmg50_mod", "change": "mult", "mods": ["dmg50"] },
        { "stat": "dmg100_mod", "change": "mult", "mods": ["dmg100"] },
        { "stat": "tenebrous_enemyhp_dmg_mod", "change": "mult", "mods": ["tenebrous_enemyhp_dmg"] },
        { "stat": "dmghplost_mod", "change": "mult", "mods": ["dmghplost"] },
       

        //{ "stat": "flex_mod", "change": "mult", "mods": ["flexstack"] },
       // { "stat": "tena_mod", "change": "mult", "mods": ["tenastack"] },
       // { "stat": "strength_mod", "change": "mult", "mods": ["strengthstack"] },
       // { "stat": "brave_mod", "change": "mult", "mods": ["bravestack"] },
       // { "stat": "specificflex_mod", "change": "mult", "mods": ["flexstack"] },
      //  { "stat": "specifictena_mod", "change": "mult", "mods": ["tenastack"] },
      //  { "stat": "specificstrength_mod", "change": "mult", "mods": ["strengthstack"] },
      //  { "stat": "specificbrave_mod", "change": "mult", "mods": ["bravestack"] },

    ],
    //stacking
    //mult_n

    "normalized": [
        { "stat": "patk", "change": "mult", "mods": ["patk%_pas", "patk%"] },
        { "stat": "matk", "change": "mult", "mods": ["matk%_pas", "matk%"] },
        { "stat": "pdef", "change": "mult", "mods": ["pdef%_pas", "pdef%"] },
        { "stat": "mdef", "change": "mult", "mods": ["mdef%_pas", "mdef%"] },
        { "stat": "hp_base", "change": "mult", "mods": ["hp%_pas"] },

        { "stat": "maxmp", "change": "mult", "mods": ["maxmp%"] },
        { "stat": "maxmp", "change": "add", "mods": ["maxmp_erp"] },

        { "stat": "crit", "change": "norm" },
        { "stat": "maxi", "change": "norm" },
        { "stat": "add", "change": "norm" },
        { "stat": "red", "change": "norm" },
        { "stat": "awkc", "change": "norm" },
        { "stat": "awkt", "change": "cap", "mods":[40] },
        { "stat": "mpattack", "change": "norm" },
        { "stat": "mpattacked", "change": "norm" },
        { "stat": "as", "change": "norm" },
        { "stat": "ms", "change": "norm" },
        { "stat": "js", "change": "norm" },

        

        { "stat": "hpflat", "change": "divide", "mods": [2] },
        { "stat": "hp_base", "change": "divide", "mods": [2] },
        { "stat": "hp", "change": "cap", "mods": ["hpflat", "hp_base"] },
        { "stat": "hpflat", "change": "times", "mods": [2] },
        { "stat": "hp_base", "change": "times", "mods": [2] },

        { "stat": "hpflat", "change": "add", "mods": ["hp", "hp_base"] },

        

        { "stat": "resfir", "change": "add", "mods": ["resall_a"] },
        { "stat": "reswat", "change": "add", "mods": ["resall_a"] },
        { "stat": "resnat", "change": "add", "mods": ["resall_a"] },
        { "stat": "reswin", "change": "add", "mods": ["resall_a"] },
        { "stat": "reslig", "change": "add", "mods": ["resall_a"] },
        { "stat": "resdar", "change": "add", "mods": ["resall_a"] },

        
        
        { "stat": "resfir", "change": "cap", "mods": [500] },
        { "stat": "reswat", "change": "cap", "mods": [500] },
        { "stat": "resnat", "change": "cap", "mods": [500] },
        { "stat": "reswin", "change": "cap", "mods": [500] },
        { "stat": "reslig", "change": "cap", "mods": [500] },
        { "stat": "resdar", "change": "cap", "mods": [500] },
        
    ],

    "normalized_fix": [
        { "stat": "critdmg", "change": "add", "mods": [150] },
        { "stat": "as", "change": "add", "mods": [100] },
        { "stat": "ms", "change": "add", "mods": [100] },
        { "stat": "js", "change": "add", "mods": [100] },
        { "stat": "crit", "change": "cap", "mods": [100] },
        { "stat": "maxi", "change": "cap", "mods": [100] },
        { "stat": "add", "change": "cap", "mods": [102.5] },
        { "stat": "as", "change": "cap", "mods": [130] },
        { "stat": "ms", "change": "cap", "mods": [130] },
        { "stat": "js", "change": "cap", "mods": [130] },
        { "stat": "red", "change": "cap", "mods": [45] },

        { "stat": "crit_r_over", "change": "substract", "mods": ["crit"] },
        { "stat": "maxi_r_over", "change": "substract", "mods": ["maxi"] },

        { "stat": "patk_min", "change": "mult", "mods": ["patk%"] },
        { "stat": "patk_max", "change": "mult", "mods": ["patk%"] },
        { "stat": "matk_min", "change": "mult", "mods": ["matk%"] },
        { "stat": "matk_max", "change": "mult", "mods": ["matk%"] },

        { "stat": "patk_min", "change": "add", "mods": ["patk"] },

        { "stat": "patk_min_maxi", "change": "add", "mods": ["patk_max"] },
        { "stat": "patk_min_maxi", "change": "times", "mods": ["maxi", 2] },
        { "stat": "patk_min_maxi", "change": "add", "mods": ["patk_min"] },

        { "stat": "patk_max", "change": "add", "mods": ["patk"] },
        { "stat": "patk_max_maxi", "change": "add", "mods": ["patk_max"] },

        { "stat": "matk_min", "change": "add", "mods": ["matk"] },

        { "stat": "matk_min_maxi", "change": "add", "mods": ["matk_max"] },
        { "stat": "matk_min_maxi", "change": "times", "mods": ["maxi", 2] },
        { "stat": "matk_min_maxi", "change": "add", "mods": ["matk_min"] },

        { "stat": "matk_max", "change": "add", "mods": ["matk"] },
        { "stat": "matk_max_maxi", "change": "add", "mods": ["matk_max"] },

        { "stat": "pdef_red", "change": "defcalc", "mods": ["pdef"] },
        { "stat": "mdef_red", "change": "defcalc", "mods": ["mdef"] }

    ],

    "base_100": [
        { "stat": "awkc", "change": "add", "mods": [100] },
        { "stat": "awkt", "change": "add", "mods": [100] },
        { "stat": "mpattack", "change": "add", "mods": [100] },
        { "stat": "mpattacked", "change": "add", "mods": [100] },
        { "stat": "as", "change": "add", "mods": [100] },
        { "stat": "ms", "change": "add", "mods": [100] },
        { "stat": "js", "change": "add", "mods": [100] },
    ],

    "hidden_m": [
        { "stat": "crit", "change": "mult", "mods": ["crit_m"] },
        { "stat": "maxi", "change": "mult", "mods": ["maxi_m"] },
        { "stat": "add", "change": "mult", "mods": ["add_m"] },
        { "stat": "as", "change": "mult", "mods": ["as_m"] },
        { "stat": "ms", "change": "mult", "mods": ["ms_m"] },
        { "stat": "js", "change": "mult", "mods": ["js_m"] },
        { "stat": "awkc", "change": "mult", "mods": ["awkc_m"] },
        { "stat": "awkt", "change": "mult", "mods": ["awkt_m"] },
        { "stat": "mpattack", "change": "mult", "mods": ["mpattack_m"] },
        { "stat": "mpattacked", "change": "mult", "mods": ["mpattacked_m"] },
        { "stat": "crit_r_m", "change": "add", "mods": [100] },
        { "stat": "maxi_r_m", "change": "add", "mods": [100] },
        { "stat": "pdefignore", "change": "mult_red", "mods": ["pdefignoretrait"] },
        { "stat": "mdefignore", "change": "mult_red", "mods": ["mdefignoretrait"] },
    ],

    //mult

    //"cap_u": [        
    //    { "stat": "as", "change": "cap", "mods": [130] },
    //    { "stat": "ms", "change": "cap", "mods": [130] },
    //    { "stat": "js", "change": "cap", "mods": [130] },
    //    { "stat": "red", "change": "cap", "mods": [45] },
    //],
    //mult red
    //add_u
    "hidden_u": [
        { "stat": "crit", "change": "add", "mods": ["crit_u"] },
        { "stat": "maxi", "change": "add", "mods": ["maxi_u"] },
        { "stat": "add", "change": "add", "mods": ["add_u"] },
        { "stat": "red", "change": "add", "mods": ["red_u"] },
        { "stat": "awkc", "change": "add", "mods": ["awkc_u"] },
        { "stat": "awkt", "change": "add", "mods": ["awkt_u"] },
        { "stat": "mpattack", "change": "add", "mods": ["mpattack_u"] },
        { "stat": "mpattacked", "change": "add", "mods": ["mpattacked_u"] },       
        { "stat": "as", "change": "add", "mods": ["as_u"] },
        { "stat": "ms", "change": "add", "mods": ["ms_u"] },
        { "stat": "js", "change": "add", "mods": ["js_u"] },
        { "stat": "mpr", "change": "mult_red", "mods": ["mpr_mod"] },
        { "stat": "red", "change": "mult_red", "mods": ["red_m"] },
        { "stat": "flexcdrc", "change": "add", "mods": ["cdrc_mod"] },
        { "stat": "tenacdrc", "change": "add", "mods": ["cdrc_mod"] },
        { "stat": "strengthcdrc", "change": "add", "mods": ["cdrc_mod"] },
        { "stat": "bravecdrc", "change": "add", "mods": ["cdrc_mod"] },
        { "stat": "flexcdr", "change": "mult_red", "mods": ["cdr_mod"] },
        { "stat": "tenacdr", "change": "mult_red", "mods": ["cdr_mod"] },
        { "stat": "strengthcdr", "change": "mult_red", "mods": ["cdr_mod"] },
        { "stat": "bravecdr", "change": "mult_red", "mods": ["cdr_mod"] },
        { "stat": "flexcdr", "change": "mult_red", "mods": ["flexcdrc"] },
        { "stat": "tenacdr", "change": "mult_red", "mods": ["tenacdrc"] },
        { "stat": "strengthcdr", "change": "mult_red", "mods": ["strengthcdrc"] },
        { "stat": "bravecdr", "change": "mult_red", "mods": ["bravecdrc"] },
        { "stat": "mastercdr", "change": "mult_red", "mods": ["mastercdrc"] },
        { "stat": "hypercdr", "change": "mult_red", "mods": ["hypercdrc"] },
        { "stat": "masterpdefreduction", "change": "add", "mods": ["masterdefignore"] },
        { "stat": "mastermdefreduction", "change": "add", "mods": ["masterdefignore"] },
        { "stat": "masterpdefreduction", "change": "mult_red", "mods": ["pdefreduction"] },
        { "stat": "mastermdefreduction", "change": "mult_red", "mods": ["mdefreduction"] },
        { "stat": "pdefreduction", "change": "mult_red", "mods": ["pdefignore"] },
        { "stat": "mdefreduction", "change": "mult_red", "mods": ["mdefignore"] },
        { "stat": "masterpdefreductionpierce", "change": "add", "mods": ["masterdefpierce"] },
        { "stat": "mastermdefreductionpierce", "change": "add", "mods": ["masterdefpierce"] },
        { "stat": "masterpdefreductionpierce", "change": "mult_red", "mods": ["pdefreductionpierce"] },
        { "stat": "mastermdefreductionpierce", "change": "mult_red", "mods": ["mdefreductionpierce"] },
        { "stat": "pdefreductionpierce", "change": "mult_red", "mods": ["pdefpierce"] },
        { "stat": "mdefreductionpierce", "change": "mult_red", "mods": ["mdefpierce"] },
        { "stat": "critdmg", "change": "add", "mods": ["critdmg_a"] },
        { "stat": "bossred", "change": "mult_red", "mods": ["bossred_m"] }
    ],

   

   // "critdmg_u": [
   //     { "stat": "critdmg", "change": "add", "mods": ["critdmg_a"] },
   // ],
     //set
    //mult_debuff
   
    

    "final_u": [
        { "stat": "crit", "change": "cap", "mods": [100] },
        { "stat": "maxi", "change": "cap", "mods": [100] },
        { "stat": "add", "change": "cap", "mods": [102.5] },
        { "stat": "as", "change": "cap", "mods": [182] },
        { "stat": "crit", "change": "minimum", "value": 0 },
        { "stat": "maxi", "change": "minimum", "value": 0 },
        { "stat": "add", "change": "minimum", "value": 0 },
        { "stat": "awkc", "change": "add", "mods": [-100] },
        { "stat": "awkt", "change": "add", "mods": [-100] },
        { "stat": "mpattack", "change": "add", "mods": [-100] },
        { "stat": "mpattacked", "change": "add", "mods": [-100] },
        { "stat": "crit_r_m", "change": "add", "mods": [-100] },
        { "stat": "maxi_r_m", "change": "add", "mods": [-100] },

        { "stat": "elemfir", "change": "mult", "mods": ["elemall_m"] },
        { "stat": "elemwat", "change": "mult", "mods": ["elemall_m"] },
        { "stat": "elemnat", "change": "mult", "mods": ["elemall_m"] },
        { "stat": "elemwin", "change": "mult", "mods": ["elemall_m"] },
        { "stat": "elemlig", "change": "mult", "mods": ["elemall_m"] },
        { "stat": "elemdar", "change": "mult", "mods": ["elemall_m"] },


        { "stat": "patk_min", "change": "mult", "mods": ["patk%"] },
        { "stat": "patk_max", "change": "mult", "mods": ["patk%"] },
        { "stat": "matk_min", "change": "mult", "mods": ["matk%"] },
        { "stat": "matk_max", "change": "mult", "mods": ["matk%"] },

        { "stat": "patk_min", "change": "add", "mods": ["patk"] },

        { "stat": "patk_min_maxi", "change": "add", "mods": ["patk_max"] },
        { "stat": "patk_min_maxi", "change": "times", "mods": ["maxi", 2] },
        { "stat": "patk_min_maxi", "change": "add", "mods": ["patk_min"] },

        { "stat": "patk_max", "change": "add", "mods": ["patk"] },
        { "stat": "patk_max_maxi", "change": "add", "mods": ["patk_max"] },

        { "stat": "matk_min", "change": "add", "mods": ["matk"] },

        { "stat": "matk_min_maxi", "change": "add", "mods": ["matk_max"] },
        { "stat": "matk_min_maxi", "change": "times", "mods": ["maxi", 2] },
        { "stat": "matk_min_maxi", "change": "add", "mods": ["matk_min"] },

        { "stat": "matk_max", "change": "add", "mods": ["matk"] },
        { "stat": "matk_max_maxi", "change": "add", "mods": ["matk_max"] },

        { "stat": "crit_mod", "change": "add", "mods": ["critdmg"] },
        { "stat": "crit_mod", "change": "times", "mods": ["crit"] },
        { "stat": "crit_mod", "change": "add", "mods": [100] },
        { "stat": "crit_mod", "change": "substract", "mods": ["crit"] },
        { "stat": "maxi_patk_mod", "change": "add", "mods": ["patk_min_maxi", "patk_max_maxi"] },
        { "stat": "maxi_patk_mod", "change": "times", "mods": [50] },
        { "stat": "maxi_patk_mod", "change": "divide", "mods": ["patk"] },
        { "stat": "maxi_matk_mod", "change": "add", "mods": ["matk_min_maxi", "matk_max_maxi"] },
        { "stat": "maxi_matk_mod", "change": "times", "mods": [50] },
        { "stat": "maxi_matk_mod", "change": "divide", "mods": ["matk"] },
        { "stat": "add_patk_mod", "change": "times", "mods": ["add", 50] },
        { "stat": "add_patk_mod", "change": "divide", "mods": ["patk"] },
        { "stat": "add_patk_mod", "change": "add", "mods": [100] },
        { "stat": "add_matk_mod", "change": "times", "mods": ["add", 50] },
        { "stat": "add_matk_mod", "change": "divide", "mods": ["matk"] },
        { "stat": "add_matk_mod", "change": "add", "mods": [100] },

        { "stat": "pdef_red", "change": "defcalc", "mods": ["pdef"] },
        { "stat": "mdef_red", "change": "defcalc", "mods": ["mdef"] },

        { "stat": "trait_dmg_mod", "change": "substract", "mods": [100] },
        { "stat": "awk_dmg_mod", "change": "substract", "mods": [100] },
        { "stat": "dmg_mod", "change": "mult", "mods": ["trait_dmg_mod", "awk_dmg_mod"] },

       
    ],

    "reversed": [
     //   { "stat": "crit_r", "change": "add", "mods": [100] },
        { "stat": "crit_r", "change": "substract", "mods": ["crit_u"] },
        { "stat": "crit_r", "change": "substract", "mods": ["crit_r_u"] },
        { "stat": "crit_r", "change": "mult_reversed", "mods": ["crit_m"] },
        { "stat": "crit_r", "change": "mult_reversed", "mods": ["crit_r_m"] },
        { "stat": "crit_r", "change": "norm_reversed" },
        { "stat": "crit_r", "change": "substract", "mods": ["crit_n"] },
        { "stat": "crit_r", "change": "substract", "mods": ["crit_r_n"] },
        { "stat": "crit_r", "change": "norm" },
        { "stat": "crit_r", "change": "minimum", "value": 0 },
        { "stat": "crit_r_over", "change": "add", "mods": ["crit_r"] },
        
     //   { "stat": "maxi_r", "change": "add", "mods": [100] },
        { "stat": "maxi_r", "change": "substract", "mods": ["maxi_u"] },
        { "stat": "maxi_r", "change": "substract", "mods": ["maxi_r_u"] },
        { "stat": "maxi_r", "change": "mult_reversed", "mods": ["maxi_m"] },
        { "stat": "maxi_r", "change": "mult_reversed", "mods": ["maxi_r_m"] },
        { "stat": "maxi_r", "change": "norm_reversed" },
        { "stat": "maxi_r", "change": "substract", "mods": ["maxi_n"] },
        { "stat": "maxi_r", "change": "substract", "mods": ["maxi_r_n"] },
        { "stat": "maxi_r", "change": "norm" },
        { "stat": "maxi_r", "change": "minimum", "value": 0 },
        { "stat": "maxi_r_over", "change": "add", "mods": ["maxi_r"] },
    ],

}

equip_normalization_table = [
    {
        "id": "crit",
        "unnorm": [0,40,75,105,140],
        "norm": [0,40,68,86,100],
        "eff": [1,0.8,0.6,0.4,0]
    },
    {
        "id": "maxi",
        "unnorm": [0, 40, 80, 120, 160],
        "norm": [0, 40, 70, 90, 100],
        "eff": [1, 0.75, 0.5, 0.25, 0]
    },
    {
        "id": "add",
        "unnorm": [0, 40, 80, 125, 160],
        "norm": [0, 40, 70, 92.5, 102.5],
        "eff": [1, 0.75, 0.5, 0.25, 0]
    },
    {
        "id": "red",
        "unnorm": [0, 20, 45, 70, 95],
        "norm": [0, 20, 32.5, 41.25, 45],
        "eff": [1, 0.5, 0.35, 0.15, 0]
    },
    {
        "id": "as",
        "unnorm": [0, 20, 35, 55, 70],
        "norm": [0, 20, 24.5, 28.5, 30],
        "eff": [1, 0.3, 0.2, 0.1, 0]
    },
    {
        "id": "mp",
        "unnorm": [0, 30, 55, 85, 110],
        "norm": [0, 30, 38.75, 46.25, 50],
        "eff": [1, 0.35, 0.25, 0.15, 0]
    },
    {
        "id": "awkc",
        "unnorm": [0, 20, 35, 45, 60],
        "norm": [0, 20, 32.75, 40.25, 50],
        "eff": [1, 0.85, 0.75, 0.65, 0]
    },


]

accs_normalization_table = [
    "crit",
    0, 0, 0, 100,
    40, 40, 0, 80,
    75, 68, 8, 60,
    105, 86, 23, 40,
    140, 100, 44, 0,
    "maxi",
    0, 0, 0, 100,
    40, 40, 0, 75,
    80, 70, 10, 50,
    120, 90, 30, 25,
    160, 100, 60, 0,
    "add",
    0, 0, 0, 100,
    40, 40, 0, 75,
    80, 70, 10, 50,
    125, 92.5, 30, 25,
    160, 102.5, 62.5, 0,
    "red",
    0, 0, 0, 100,
    20, 20, 0, 50,
    45, 32.5, 10, 35,
    70, 41.25, 16.75, 15,
    95, 45, 30.75, 0,
    "as",
    0, 0, 0, 100,
    20, 20, 0, 30,
    35, 24.5, 14, 20,
    55, 28.5, 17.5, 10,
    70, 30, 23, 0,
    "mp",
    0, 0, 0, 100,
    30, 30, 0, 35,
    55, 38.75, 19.5, 25,
    85, 46.25, 25, 15,
    110, 50, 33.5, 0,
    "awkc",
    0, 0, 0, 100,
    20, 20, 0, 85,
    35, 32.75, 3, 75,
    45, 40.25, 6.5, 65,
    60, 50, 11, 0,
    "spec_40",
    0, 0, 0, 100,
    20, 20, 0, 75,
    35, 31.25, 5, 50,
    45, 36.25, 13.75, 25,
    60, 40, 25, 0,
    "spec_50",
    0, 0, 0, 100,
    20, 20, 0, 75,
    40, 35, 5, 50,
    60, 45, 15, 25,
    80, 50, 30, 0,
    "spec_30chung",
    0, 0, 0, 100,
    0, 0, 0, 100,
    10, 10, 0, 50,
    30, 20, 5, 25,
    70, 30, 12.5, 0,
    "spec_30add",
    0, 0, 0, 100,
    10, 10, 0, 75,
    25, 21.25, 2.5, 50,
    35, 26.25, 8.75, 25,
    50, 30, 17.5, 0,
    "spec_50ara",
    0, 0, 0, 100,
    0, 0, 0, 100,
    10, 10, 0, 60,
    40, 28, 4, 40,
    95, 50, 12, 0
]


ereda_rank_modifier = [
    0.2,
    0.7,
    0.8,
    0.9,
    1,
    1.1,
    1.2,
    1.3,
    1.4,
    1.5
]

enhancement_table = [
    1,
    1.03,
    1.06,
    1.09,
    1.16,
    1.23,
    1.30,
    1.45,
    1.60,
    1.75,
    2.15,
    2.55,
    2.95,
    3.35]

growth_table = [
    0,
    1,
    2,
    3,
    4
]



reforge_tables = {
    "amethystine_prophecy": [
        0,
        88,
        167,
        240,
        308,
        372,
        432,
        488,
        541,
        591,
        638,
        682,
        724,
        763,
        800,
        835,
        867,
        897,
        925,
        951,
        975,
        1000,
    ],
    "tenebrous": [
        0,
        93,
        182,
        267,
        350,
        430,
        508,
        584,
        658,
        731,
        802,
        872,
        940,
        1007,
        1073,
        1137,
        1200,
        1262,
        1323,
        1383,
        1442,
        1500,
    ],
    "exascale": [
        0,
        100,
        198,
        296,
        393,
        490,
        586,
        682,
        778,
        873,
        968,
        1063,
        1158,
        1252,
        1346,
        1440,
        1534,
        1628,
        1721,
        1814,
        1907,
        2000
    ],
    "vestige_of_soul": [
        0,
        0,
        0,
        0,
        0,
        0
    ]

}

accs_enhancement_slots = [
    "weapon",
    "top",
    "bot",
    "gloves",
    "shoes",
]

accs_enhancement_stats = [
    "patk",
    "matk",
    "pdef",
    "mdef",
    "hpflat",
]

accs_slot_modifier = {
    "weapon": { "patk": 1, "matk": 1, "pdef": 0.08, "mdef": 0.08, "hpflat": 0.1 },
    "top": { "patk": 0.03, "matk": 0, "pdef": 0.3, "mdef": 0.25, "hpflat": 0.35 },
    "bot": { "patk": 0, "matk": 0.05, "pdef": 0.25, "mdef": 0.3, "hpflat": 0.3 },
    "gloves": { "patk": 0.05, "matk": 0, "pdef": 0.2, "mdef": 0.25, "hpflat": 0.1 },
    "shoes": { "patk": 0, "matk": 0.03, "pdef": 0.25, "mdef": 0.2, "hpflat": 0.15 },

}


accs_base_stats = [
    "hp_base",
    "maxmp",
    "patk",
    "matk",
    "pdef",
    "mdef",

]



accs_guild_passive_list = [
    "unleash_anger",
    "awakened_spirit",
    "comrades_cheer",
    "alchemy_specialist",
    "concentrated_mana",
    "nature_immersion",
    "hand_of_midas",
    "trace_of_treasure",
    "frugal_spirit",
    "light_steps",
    "critical_counter",
    "blessed_recovery",
    "powerful_physique",
    "hunters_instinct",
    "heros_sacrifice",
    "risk_management"
]

accs_guild_passive = {
    "unleash_anger": { "id": 0, "required": 0, "name": "Unleash Anger", "desc": "Increase awakening recharge (DP amount) when attacking/attacked", "shown_stat": [{ "left": ["Awakening Charge when attacking"], "right": ["+", 2, "%"] }, { "left": ["Awakening Charge when attacked"], "right": ["+", 2, "%"] }], "actual_stat": [["awkc_m", 2]] },
    "awakened_spirit": { "id": 1, "required": 0, "name": "Awakened Spirit", "desc": "Increase awakening duration (DP cost decrease)", "shown_stat": [{ "left": ["Awakening Duration"], "right": ["+", 3, "%"] }], "actual_stat": [["awkt_m", 0.3]] },
    "comrades_cheer": { "id": 2, "required": 0, "name": "Comarade's Cheer", "desc": "Boost EXP", "shown_stat": [{ "left": ["Dungeon EXP"], "right": ["+", 2, "%"] }], "hidden": [["exp", 2]] },
    "alchemy_specialist": { "id": 3, "required": 0, "name": "Alchemy Specialist", "desc": "Increase item recovery effect", "shown_stat": [{ "left": ["Potion, Food, Dungeon Recovery Item Effect"], "right": ["+", 5, "%"] }], "hidden": [["recitem", 5]] },

    "concentrated_mana": { "id": 4, "required": 5, "name": "Concentrated Mana", "desc": "Increase MP Recovery when attacking/attacked", "shown_stat": [{ "left": ["MP Recovery when attacking"], "right": ["+", 2, "%"] }, { "left": ["MP Recovery when attacked"], "right": ["+", 2, "%"] }], "actual_stat": [["mpattack_m", 2], ["mpattacked_m", 2]] },
    "nature_immersion": { "id": 5, "required": 5, "name": "Nature Immersion", "desc": "Increase all attribute activation chance and resistance", "shown_stat": [{ "left": ["All Attribution Activation Chance"], "right": ["+", 0.5, "%"] }, { "left": ["All Elemental Resistance"], "right": ["+", 5] }], "actual_stat": [["elemall", 0.5], ["resall", 5]] },
    "hand_of_midas": { "id": 6, "required": 5, "name": "Hand of Midas", "desc": "Increase ED acquisition", "shown_stat": [{ "left": ["ED Gain"], "right": ["+", 2, "%"] }], "hidden": [["ed", 2]] },
    "trace_of_treasure": { "id": 7, "required": 5, "name": "Trace of Treasure", "desc": "Increase Item Drop rate", "shown_stat": [{ "left": ["Item Drop Rate"], "right": ["+", 2, "%"] }], "hidden": [["idr", 2]] },

    "frugal_spirit": { "id": 8, "required": 10, "name": "Frugal Spirit", "desc": "At a certain chance do not use the consumable item", "shown_stat": [{ "left": ["Chance to not use the consumable item"], "right": [1, "%"] }] },
    "light_steps": { "id": 9, "required": 10, "name": "Light Steps", "desc": "Moving Speed,  Jump Speed Increase every time ED is obtained", "shown_stat": [{ "left": ["Moving Speed,  Jump Speed Increase every time ED is obtained (Max 10 Stacks)"], "right": [0.5, "%"] }] },
    "critical_counter": { "id": 10, "required": 10, "name": "Critical Counter", "desc": "Apply Critical buff at a certain chance when attacking/attacked", "shown_stat": [{ "left": ["When Attacking/attacked 3% chance to have next normal attacks be critical"], "right": [[3, 4, 5, 6, 7], " attacks"] }] },
    "blessed_recovery": { "id": 11, "required": 10, "name": "Blessed Recovery", "desc": "Replenishes HP when hit by enemy (Total Max 30% HP)", "shown_stat": [{ "left": ["Chance to recover 100% received damage in 3 seconds"], "right": [1, "%"] }] },

    "powerful_physique": { "id": 12, "required": 15, "name": "Powerful Physique", "desc": "Increase Physical/Magical Attack Power", "shown_stat": [{ "left": ["Physical Attack Power"], "right": ["+", 0.3, "%"] }, { "left": ["Magical Attack Power"], "right": ["+", 0.3, "%"] }], "actual_stat": [["patk%_pas", 0.3], ["matk%_pas", 0.3]] },
    "hunters_instinct": { "id": 13, "required": 15, "name": "Hunter's Instinct", "desc": "Increase damage against boss monsters while decrease damage from boss monsters", "shown_stat": [{ "left": ["Damage to Boss Monsters"], "right": ["+", 0.5, "%"] }, { "left": ["Damage from Boss Monsters Decrease"], "right": ["+", 0.5, "%"] }], "hidden": [["bossdmg", 0.5], ["bossred", 0.5]] },
    "heros_sacrifice": { "id": 14, "required": 15, "name": "Hero's Sacrifice", "desc": "Replenishes HP of nearby allies upon death", "shown_stat": [{ "left": ["Recover HP for allies within 1500"], "right": [6, "% HP"] }], "pvp_shown_stat": [{ "left": ["Recover HP for allies within 1500"], "right": [2, "% HP"] }] },
    "risk_management": { "id": 15, "required": 15, "name": "Risk Management", "desc": "Decrease received damage at a certain chance", "shown_stat": [{ "left": ["When attacked, 2% chance to decrease received damage for 3 sec. (Cooldown: 30 sec.)"], "right": ["-", 10, "% Damage"] }], "pvp_shown_stat": [{ "left": ["When attacked, 2% chance to decrease received damage for 3 sec. (Cooldown: 30 sec.)"], "right": ["-", 3, "% Damage"] }] }
}


accs_force_slots = [
    { "id": 0, "type": "passive" , "patch": 0, "imgx": 3, "imgy":4},
    { "id": 1, "type": "passive", "patch": 0, "imgx": 2, "imgy": 5 },    
    { "id": 2, "type": "active", "patch": 0 },
    { "id": 3, "type": "active", "patch": 0 },
    { "id": 4, "type": "active", "patch": 0 },
    { "id": 5, "type": "active", "patch": 0 },
    { "id": 6, "type": "active", "patch": 0 },
    { "id": 7, "type": "passive", "patch": 3, "imgx": 3, "imgy": 5 },

]

accs_force_list = {
    "passive": [
        { "id": 0, "name": "Passive", "icon": "blank", "style": ["blank"], "choice": ["-"], "fixed": [[]] },
        { "id": 1, "name": "Remaining El's Aspiration", "icon": "remaining_els_aspiration", "style": ["legendary"], "choice": ["Legendary"], "fixed": [[["When Attacking, at 0.5% chance summon the El's Aspiration, dealing 6508% damage 5 times.", 0]]], "pvp_fixed": [[["When Attacking, at 0.5% chance summon the El's Aspiration, dealing 780% 5 times.", 0]]] },
        { "id": 2, "name": "Eroding Energy", "icon": "eroding_aura", "style": ["unique", "elite", "rare"], "choice": ["Unique", "Elite", "Rare"], "fixed": [[["maxmp", 100], ["25 MP Recovery per second when out of combat, but drains 3% HP", 0]], [["maxmp", 80], ["15 MP Recovery per second when out of combat, but drains 3% HP", 0]], [["maxmp", 50], ["10 MP Recovery per second when out of combat, but drains 3% HP", 0]]], "pvp_fixed": [[["maxmp", 50], ["2.5 MP Recovery per second when out of combat, but drains 3% HP", 0]], [["maxmp", 40], ["1.5 MP Recovery per second when out of combat, but drains 3% HP", 0]], [["maxmp", 25], ["1 MP Recovery per second when out of combat, but drains 3% HP", 0]]] },
        { "id": 3, "name": "Get Greedy", "icon": "excessive_greed", "style": ["unique", "elite", "rare"], "choice": ["Unique", "Elite", "Rare"], "fixed": [[["idr", 20], ["Increases drop rate by 5% per 100 000 Combat Power", 0]], [["idr", 20], ["Increases drop rate by 3% per 100 000 Combat Power", 0]], [["idr", 20], ["Increases drop rate by 1% per 100 000 Combat Power", 0]]] },
        { "id": 4, "name": "Head Hunter", "icon": "head_hunter", "style": ["unique", "elite", "rare"], "choice": ["Unique", "Elite", "Rare"], "fixed": [[["bossdmg", 80], ["patk%_pas", -24], ["matk%_pas", -24]], [["bossdmg", 60], ["patk%_pas", -20], ["matk%_pas", -20]], [["bossdmg", 40], ["patk%_pas", -18], ["matk%_pas", -18]]] },
        { "id": 5, "name": "Illipia's Aura", "icon": "illipias_aura", "style": ["unique", "elite", "rare"], "choice": ["Unique", "Elite", "Rare"], "fixed": [[["hpflat", 100000], ["3% HP Recovery per second when out of combat", 0]], [["hpflat", 70000], ["2% HP Recovery per second when out of combat", 0]], [["hpflat", 40000], ["1.2% HP Recovery per second when out of combat", 0]]], "pvp_fixed": [[["hpflat", 25000], ["0.6% HP Recovery per second when out of combat", 0]], [["hpflat", 17500], ["0.4% HP Recovery per second when out of combat", 0]], [["hpflat", 10000], ["0.24% HP Recovery per second when out of combat", 0]]] },
        { "id": 6, "name": "Indomitable Will", "icon": "indomitable_will", "style": ["unique", "elite", "rare"], "choice": ["Unique", "Elite", "Rare"], "fixed": [[["When your remaining HP is lower than 55%, all attacks will become critical attacks", 0]], [["When your remaining HP is lower than 45%, all attacks will become critical attacks", 0]], [["When your remaining HP is lower than 25%, all attacks will become critical attacks", 0]]], "pvp_fixed": [[["When your remaining HP is lower than 44%, all attacks will become critical attacks", 0]], [["When your remaining HP is lower than 36%, all attacks will become critical attacks", 0]], [["When your remaining HP is lower than 20%, all attacks will become critical attacks", 0]]] },
        { "id": 7, "name": "Lightning Chain", "icon": "lightning_chain", "style": ["unique", "elite", "rare"], "choice": ["Unique", "Elite", "Rare"], "fixed": [[["Lightning is charged every second while not in combat. After 8 charges, the next successful attack will shoot a chain of lightning that will hit nearby enemies for 1265%. Damage decreases per hit.", 0]], [["Lightning is charged every second while not in combat. After 9 charges, the next successful attack will shoot a chain of lightning that will hit nearby enemies for 978%. Damage decreases per hit.", 0]], [["Lightning is charged every second while not in combat. After 10 charges, the next successful attack will shoot a chain of lightning that will hit nearby enemies for 575%. Damage decreases per hit.", 0]]], "pvp_fixed": [[["Lightning is charged every second while not in combat. After 8 charges, the next successful attack will shoot a chain of lightning that will hit nearby enemies for 316%. Damage decreases per hit.", 0]], [["Lightning is charged every second while not in combat. After 9 charges, the next successful attack will shoot a chain of lightning that will hit nearby enemies for 244%. Damage decreases per hit.", 0]], [["Lightning is charged every second while not in combat. After 10 charges, the next successful attack will shoot a chain of lightning that will hit nearby enemies for 143%. Damage decreases per hit.", 0]]] },
        { "id": 8, "name": "Ignite", "icon": "ignite", "style": ["unique", "elite", "rare"], "choice": ["Unique", "Elite", "Rare"], "fixed": [[["When Attacking, at 0.5% chance summon Blazing Flame, that flies towards an enemy and burns 50 MP. Also causes debuff, that disables MP recovery while attacking and attacked for 3 seconds",0]], [["When Attacking, at 0.5% chance summon Blazing Flame, that flies towards an enemy and burns 40 MP. Also causes debuff, that disables MP recovery while attacking and attacked for 2 seconds",0]], [["When Attacking, at 0.5% chance summon Blazing Flame, that flies towards an enemy and burns 30 MP. Also causes debuff, that disables MP recovery while attacking and attacked for 1 seconds",0]]] },
        { "id": 9, "name": "Sol Dominion", "icon": "sol_dominion", "style": ["unique", "elite", "rare"], "choice": ["Unique", "Elite", "Rare"], "fixed": [[["master", 10], ["Increases Master Skill Damage by 1% per 300 000 Combat Power (Max. 10%)", 0]], [["master", 7], ["Increases Master Skill Damage by 1% per 300 000 Combat Power (Max. 7%)", 0]], [["master", 4], ["Increases Master Skill Damage by 1% per 300 000 Combat Power (Max. 4%)", 0]]] },
        { "id": 10, "name": "El Affected Paradigm", "icon": "el_affected_paradigm", "style": ["unique", "elite", "rare"], "choice": ["Unique", "Elite", "Rare"], "fixed": [[["mastercdr", 10], ["Decreases Master Skill Cooldown by 1% per 300 000 Combat Power (Max. 10%)", 0]], [["mastercdr", 7], ["Decreases Master Skill Cooldown by 1% per 300 000 Combat Power (Max. 7%)", 0]], [["mastercdr", 4], ["Decreases Master Skill Cooldown by 1% per 300 000 Combat Power (Max. 4%)", 0]]] },
        { "id": 11, "name": "Water Wears Away the Stone", "icon": "water_wears_away_the_stone", "style": ["unique", "elite", "rare"], "choice": ["Unique", "Elite", "Rare"], "fixed": [[["Increases Master Skill Damage by 1% per kill (Max. 30%)", 0]], [["Increases Master Skill Damage by 1% per kill (Max. 20%)", 0]], [["Increases Master Skill Damage by 1% per kill (Max. 10%)", 0]]] },
        { "id": 12, "name": "Will Save You", "icon": "will_save_you", "style": ["unique"], "choice": ["Unique"], "fixed": [[["hpflat",200000],["Resists certain Inferno (flame and fire) debuffs.", 0]]] },
        { "id": 13, "name": "Spirit Challenger", "icon": "spirit_challenger", "style": ["unique"], "choice": ["Unique"], "fixed": [[["bossdmg", 45]]] },
    ],
    "active": [
        { "id": 0, "name": "Active", "icon": "blank", "style": ["blank"], "choice": ["-"], "fixed": [[]] },
        { "id": 1, "name": "Elrian Clock", "icon": "elrian_clock", "style": ["legendary"], "choice": ["Legendary"], "fixed": [[["Become invincible but immobile while using this skill.", 0]]] },
        { "id": 2, "name": "Fog of Death", "icon": "fog_of_death", "style": ["legendary"], "choice": ["Legendary"], "fixed": [[["When using, slows enemies within a certain range and deals 1110% damage continuously over 7 seconds.", 0]]], "pvp_fixed": [[["When using, slows enemies within a certain range and deals 133% damage continuously over 7 seconds.", 0]]] },
        { "id": 3, "name": "Drain", "icon": "drain", "style": ["unique", "elite", "rare"], "choice": ["Unique", "Elite", "Rare"], "fixed": [[["Deal 30% of current HP as damage (2843% damage to Boss Monsters) while absorbing half of the HP of the enemy ahead that is closest to you.", 0]], [["Deal 20% of current HP as damage (2133% damage to Boss Monsters) while absorbing half of the HP of the enemy ahead that is closest to you.", 0]], [["Deal 18% of current HP as damage (1422% damage to Boss Monsters) while absorbing half of the HP of the enemy ahead that is closest to you.", 0]]], "pvp_fixed": [[["Deal 15% of current HP as damage (2843% damage to Boss Monsters) while absorbing half of the HP of the enemy ahead that is closest to you.", 0]], [["Deal 10% of current HP as damage (2133% damage to Boss Monsters) while absorbing half of the HP of the enemy ahead that is closest to you.", 0]], [["Deal 9% of current HP as damage (1422% damage to Boss Monsters) while absorbing half of the HP of the enemy ahead that is closest to you.", 0]]] },
        { "id": 4, "name": "Haunting Spirit", "icon": "haunting_spirit", "style": ["unique", "elite", "rare"], "choice": ["Unique", "Elite", "Rare"], "fixed": [[["Launch an evil spirit towards the nearest enemy, hitstunning them and reducing their Movement and Jump Speed by 60% for 5 seconds.", 0]], [["Launch an evil spirit towards the nearest enemy, hitstunning them and reducing their Movement and Jump Speed by 40% for 4.5 seconds.", 0]], [["Launch an evil spirit towards the nearest enemy, hitstunning them and reducing their Movement and Jump Speed by 20% for 3 seconds.", 0]]] },
        { "id": 5, "name": "Hyper Acceleration", "icon": "hyper_acceleration", "style": ["unique", "elite", "rare"], "choice": ["Unique", "Elite", "Rare"], "fixed": [[["Movement Speed and Jump Speed will increase 2.2 times for 8 seconds.", 0]], [["Movement Speed and Jump Speed will increase 1.7 times for 7 seconds.", 0]], [["Movement Speed and Jump Speed will increase 1.3 times for 4 seconds.", 0]]] },
        { "id": 6, "name": "Obtenebration", "icon": "obtenebration", "style": ["unique", "elite", "rare"], "choice": ["Unique", "Elite", "Rare"], "fixed": [[["Cannot dash for 7 seconds, but can move past enemies in an invincible state with much higher Movement Speed. This skill cancels when you initiate attack.", 0]], [["Cannot dash for 4 seconds, but can move past enemies in an invincible state with much higher Movement Speed. This skill cancels when you initiate attack.", 0]], [["Cannot dash for 2 seconds, but can move past enemies in an invincible state with much higher Movement Speed. This skill cancels when you initiate attack.", 0]]] },
        { "id": 7, "name": "Soul Harvest", "icon": "soul_harvest", "style": ["unique", "elite", "rare"], "choice": ["Unique", "Elite", "Rare"], "fixed": [[["Sacrifice a nearby regular monster to recover 300 MP.", 0]], [["Sacrifice a nearby regular monster to recover 200 MP.", 0]], [["Sacrifice a nearby regular monster to recover 50 MP.", 0]]] },
        { "id": 8, "name": "Thunderstorm", "icon": "thunderstorm", "style": ["unique", "elite", "rare"], "choice": ["Unique", "Elite", "Rare"], "fixed": [[["Summons a lightning bolt, dealing 3400% damage. Enemies hit are stunned for 2 seconds.", 0]], [["Summons a lightning bolt, dealing 2265% damage. Enemies hit are stunned for 2 seconds.", 0]], [["Summons a lightning bolt, dealing 1600% damage. Enemies hit are stunned for 2 seconds.", 0]]], "pvp_fixed": [[["Summons a lightning bolt, dealing 680% damage. Enemies hit are stunned for 2 seconds.", 0]], [["Summons a lightning bolt, dealing 453% damage. Enemies hit are stunned for 2 seconds.", 0]], [["Summons a lightning bolt, dealing 320% damage. Enemies hit are stunned for 2 seconds.", 0]]] },
        { "id": 9, "name": "Nasod Protector", "icon": "nasod_protector", "style": ["unique", "elite", "rare"], "choice": ["Unique", "Elite", "Rare"], "fixed": [[["Summon Nasod Protector for 10 sec. Enemies within its range are damaged continuously (462% 16 times) and receive 15% more damage from Master SKills", 0]], [["Summon Nasod Protector for 10 seconds. Enemies within its range are damaged continuously (322% 16 times) and receive 10% more damage from Master SKills", 0]], [["Summon Nasod Protector for 10 seconds. Enemies within its range are damaged continuously (182% 16 times) and receive 5% more damage from Master SKills", 0]]], "pvp_fixed": [[["Summon Nasod Protector for 10 seconds. Enemies within its range are damaged continuously (184% 16 times) and receive 15% more damage from Master SKills", 0]], [["Summon Nasod Protector for 10 seconds. Enemies within its range are damaged continuously (128% 16 times) and receive 10% more damage from Master SKills", 0]], [["Summon Nasod Protector for 10 seconds. Enemies within its range are damaged continuously (72% 16 times) and receive 5% more damage from Master SKills", 0]]] },
        { "id": 10, "name": "Raging Storm", "icon": "raging_storm", "style": ["unique", "elite", "rare"], "choice": ["Unique", "Elite", "Rare"], "fixed": [[["Forms a raging storm ahead, that sweeps enemies and moves towards the caster, dealing 269% damage 28 times", 0]], [["Forms a raging storm ahead, that sweeps enemies and moves towards the caster, dealing 189% damage 28 times", 0]], [["Forms a raging storm ahead, that sweeps enemies and moves towards the caster, dealing 95% damage 28 times", 0]]], "pvp_fixed": [[["Forms a raging storm ahead, that sweeps enemies and moves towards the caster, dealing 107% damage 28 times", 0]], [["Forms a raging storm ahead, that sweeps enemies and moves towards the caster, dealing 75% damage 28 times", 0]], [["Forms a raging storm ahead, that sweeps enemies and moves towards the caster, dealing 38% damage 28 times", 0]]] },
        { "id": 11, "name": "Shattered Earth", "icon": "shattered_earth", "style": ["unique", "elite", "rare"], "choice": ["Unique", "Elite", "Rare"], "fixed": [[["The earth shatters and levitates ahead, dealing 4323% damage and rendering enemies immobile for 2 sec.", 0]], [["The earth shatters and levitates ahead, dealing 3368% damage and rendering enemies immobile for 1.5 sec.", 0]], [["The earth shatters and levitates ahead, dealing 1924% damage and rendering enemies immobile for 1 sec.", 0]]], "pvp_fixed": [[["The earth shatters and levitates ahead, dealing 1729% damage and rendering enemies immobile for 2 sec.", 0]], [["The earth shatters and levitates ahead, dealing 1347% damage and rendering enemies immobile for 1.5 sec.", 0]], [["The earth shatters and levitates ahead, dealing 769% damage and rendering enemies immobile for 1 sec.", 0]]] },
    ]
}





