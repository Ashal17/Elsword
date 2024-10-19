equip_trait_list=[
{"name":"None", "effects":[], "desc":"No change"},
{"name":"Empowered", "effects":["damage"], "desc":"Damage increase", "default_value":[120]},
{"name":"Gigantic", "effects":[], "desc":"Skill radius / size increase"},
{"name":"Light", "effects":["mp"], "desc":"MP cost reduced", "default_value":[80]},
{"name":"Heavy", "effects":["damage", "cd"], "desc":"Damage increase, Cooldown time increase", "default_value":[144,120]},
{"name":"Useful", "effects":["damage"], "desc":"Damage decrease, Amount of hits increased", "default_value":[60]},
{"name":"Enhanced", "effects":["damage"], "desc":"Critical hit rate increase to 100%, Damage decrease", "default_value":[80]},
{"name":"Reversed", "effects":["mp", "cd"], "desc":"MP Cost reduced, Cooldown time increased", "default_value":[60,140]},
{"name":"Critical", "effects":["mp"], "desc":"Ignore guard and 50% defense (25% PvP), MP Cost increase", "default_value":[120]},
{"name":"Haste", "effects":["cd"], "desc":"Cooldown time decrease", "default_value":[80]},
{"name":"Regenerating (1)", "effects":[], "desc":"Certain chance of regaining some of the MP used"},
{"name":"Regenerating (2)", "effects":[], "desc":"50% chance of reducing cooldown time to 60%"},
{"name":"Ruthless", "effects":["cd"], "desc":"Skill will cancel Mana Break, Cooldown time increase", "default_value":[200]},
{"name":"Evil", "effects":[], "desc":"Skill will burn MP per hit"},
{"name":"Powerful", "effects":["cd"], "desc":"Super Armor added to the skill, Cooldown time increase", "default_value":[150]},
{"name":"Killing Blow (1)", "effects":[], "desc":"Skill effect's duration increase"},
{"name":"Killing Blow (2)", "effects":[], "desc":"Skill effect's effectiveness increase"},
{"name":"Absorbing", "effects":[], "desc":"Skill's Mana gain will increase"},
{"name":"Persistent", "effects":[], "desc":"Range/Duration increase"},
{"name":"Persistent(KD)", "effects":[], "desc":"Skill will reduce KD per hit"},


]


equip_skill_tier=[
{"short_name":"none", "name":"None"},
{"short_name":"flex", "name":"Active"},
{"short_name":"tena", "name":"Tenacity"},
{"short_name":"strength", "name":"Strength"},
{"short_name":"brave", "name":"Bravery"},
{"short_name":"hyper", "name":"Hyperactive"}

]

equip_skill_type=[
{"short_name":"physical", "name":"Physical"},
{"short_name":"magical", "name":"Magical"},
{"short_name":"average", "name":"Average"},
]

equip_skill_list=[
{"id":0, "name":"None", "icon":"none", "class":"none", "tier":"none", "mp":0, "cd":0, "type":"physical", "command":0, "asd":1, "traits":[{"name":"Empowered", "damage":120}, {"name":"Useful", "damage":60}], "parts":[{"name":"Part", "damage":100, "hits":10, "hits_useful":20}]},
    { "id": 1, "name": "Damages", "icon": "none", "class": "none", "tier": "none", "mp": 0, "cd": 0, "type": "physical", "command": 0, "asd": 1, "traits": [{ "name":"Regenerating (1)", "damage":120}, {"name":"Useful", "damage":60}], "parts":[{"name":"Part", "damage":100, "hits":10, "hits_useful":20}]}




]
