const SKILL_TRAITS_OPTIONS = [
  {
    name: 'Empowered',
    id: '1.0',
    effect: [
      {
        description: 'Damage increased',
        id: '1.1',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Gigantic',
    id: '2.0',
    effect: [
      {
        description: 'Skill radius/size increased',
        id: '2.1',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Light',
    id: '3.0',
    effect: [
      {
        description: 'MP cost reduced',
        id: '3.1',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Heavy',
    id: '4.0',
    effect: [
      {
        description: 'Damage increased by 44%',
        id: '4.1',
        dynamic: false,
        amount: 0,
      },
      {
        description: 'Cooldown time increased to 120%',
        id: '4.2',
        dynamic: false,
        amount: 0,
      },
    ],
  },
  {
    name: 'Useful',
    id: '5.0',
    effect: [
      {
        description: 'Damage reduced',
        id: '5.1',
        dynamic: true,
        amount: 0,
      },
      {
        description: 'Hit count increased',
        id: '5.2',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Enhanced',
    id: '6.0',
    effect: [
      {
        description: 'Critical rate increased to 100%',
        id: '6.1',
        dynamic: false,
        amount: 0,
      },
      {
        description: 'Damage reduced',
        id: '6.2',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Reversed',
    id: '7.0',
    effect: [
      {
        description: 'Cooldown increased',
        id: '7.1',
        dynamic: true,
        amount: 0,
      },
      {
        description: 'MP cost reduced',
        id: '7.2',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Critical',
    id: '8.0',
    effect: [
      {
        description: 'MP cost increased',
        id: '8.1',
        dynamic: true,
        amount: 0,
      },
      {
        description: 'Skill will ignore 50% defense',
        id: '8.2',
        dynamic: false,
        amount: 0,
      },
    ],
  },
  {
    name: 'Haste',
    id: '9.0',
    effect: [
      {
        description: 'Cooldown reduced',
        id: '9.1',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Regenerating 1',
    id: '10.0',
    effect: [
      {
        description: 'At certain chance of regaining some of the MP used',
        id: '10.1',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Regenerating 2',
    id: '11.0',
    effect: [
      {
        description: '50% chance of reducing cooldown time to 60%',
        id: '11.1',
        dynamic: false,
        amount: 0,
      },
    ],
  },
  {
    name: 'Ruthless',
    id: '12.0',
    effect: [
      {
        description: 'Skill will cancel Mana Break',
        id: '12.1',
        dynamic: false,
        amount: 0,
      },
      {
        description: 'Cooldown time is doubled',
        id: '12.2',
        dynamic: false,
        amount: 0,
      },
    ],
  },
  {
    name: 'Evil',
    id: '13.0',
    effect: [
      {
        description: 'Skill will burn MP per hit',
        id: '13.1',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Powerful',
    id: '14.0',
    effect: [
      {
        description: 'Super Armor state added to the skill',
        id: '14.1',
        dynamic: false,
        amount: 0,
      },
      {
        description: 'Cooldown increased',
        id: '14.2',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Killing Blow 1',
    id: '15.0',
    effect: [
      {
        description: "Skill effect's duration increased",
        id: '15.1',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Killing Blow 2',
    id: '16.0',
    effect: [
      {
        description: "Skill effect's effectiveness increased",
        id: '16.1',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Absorbing',
    id: '17.0',
    effect: [
      {
        description: "Skill's Mana gain increased",
        id: '17.1',
        dynamic: true,
        amount: 0,
      },
    ],
  },
  {
    name: 'Persistent',
    id: '18.0',
    effect: [
      {
        description: 'Skill will reduce KD per hit',
        id: '18.1',
        dynamic: true,
        amount: 0,
      },
    ],
  },
]

export default SKILL_TRAITS_OPTIONS
