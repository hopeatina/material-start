(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q){
    var ddibks = ['The Start-Up Diaries','The Hard Thing About Hard Things','Founders at Work ','Good to Great'];
    var whybks = ['Zero to One', 'Rework','Blue Ocean Strategy'];
    var funbks = ['The Lean Startup','The Innovator\'s Dilemma', 'The Innovator\'s Solution','Running Lean',
      'The Startup Owner\'s Manual','The Four Steps To Epiphany'];
    var discobks =['Crush it!','The Magic of Thinking Big', 'Made to Stick','Business Model Generation','Diffusion of Innovations', 'Mindset'
    ];
    var valibks  =['The Thank You Economy (Gary Vaynerchuk)',
    'Lean Customer Development',
    'Lean Analytics',
    'Product Design for the Web',
    'Don’t Make Me Think',
    'Rocket Surgery Made Easy'];
    var scalbks=['THERE IS NO BOOK','Traction',
      'Predictable Revenue',
      'Tested Advertising Methods',
      'Establishing/Maximizing Profits',
      'Scaling up excellence: Getting to more without settling for less',
    'Scaling Up: How a Few Companies Make It...and Why the Rest Don\'t',
    'Hooked: How to build habit-forming products',
    'Antifragile: Things that gain from disorder',
    'Startup CEO: A Field Guide to Scaling Up Your Business, + Website'];

    var users = [
      {
        name: 'Don\'t Do It',
        avatar: 'svg-1',
        books: ddibks,
        content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'

      },
      {
        name: 'Ideology/Why',
        avatar: 'svg-2',
        books: whybks,
        content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
      },
      {
        name: 'Fundamentals',
        avatar: 'svg-3',
        books: funbks,
        content: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS."
      },
      {
        name: 'Discovery',
        avatar: 'svg-4',
        books: discobks,
        content: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.'
      },
      {
        name: 'Validation/Product Market Fit',
        avatar: 'svg-5',
        books: valibks,
        content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.'
      },
      {
        name: 'Scaling',
        avatar: 'svg-6',
        books: scalbks,
        content: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada."
      }
    ];

    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();
