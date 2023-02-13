import { ILangData } from './global-components/interfaces';

export const langData: ILangData = {
  'en': {
    'rules-goal-title': 'The aim:',
    'rules-goal-text': 'to be the first to play all of one`s own cards.',
    'rules-play-title': 'How to play',
    'rules-play-text':
      'On your turn, you should play one card matching the discard in color, number, or symbol. If you have no a matching card, draw the top card from the deck, and play it if possible. When you play your penultimate card you must call `Uno!`. If you don\'t not call `Uno` and is caught before the next player in sequence starts to take a turn, you must draw two cards as a penalty.',
    'rules-points-title': 'Scoring',
    'rules-points-text':
      'The first player to get rid of their last card wins the hand and scores points for the cards held by the other players. The first player to score 250 points wins the game.',
    'numbered-card-title': 'Number card',
    'plustwo-card-title': 'Draw Two',
    'plusfour-card-title': 'Wild Draw Four',
    'reverse-card-title': 'Reverse',
    'blocked-card-title': 'Skip',
    'multi-card-title': 'Wild',
    'numbered-card-descr':
      'Card is played if it`s matche the discard in color or number.',
    'plustwo-card-descr':
      'Next player in sequence draws two cards and misses a turn. If Draw Two card is played, and the following player has a card with the same symbol, he can`t play that card and `stack` the penalty, which adds to the current penalty and passes it to the following player.',
    'plusfour-card-descr':
      'Player declares the next color to be matched; next player in sequence draws four cards and misses a turn. May be legally played only if the player has no cards of the current color. If Wild Draw Four card is played, and the following player has a card with the same symbol, he can`t play that card and `stack` the penalty, which adds to the current penalty and passes it to the following player.  Effect as first discard: card is returned to the deck, then a new card is laid down into the discard pile.',
    'reverse-card-descr': 'Order of play switches directions.',
    'blocked-card-descr': 'Next player in sequence misses a turn.',
    'multi-card-descr':
      'Player declares the next color to be matched. The next player should play one card in declared color or any Wild Card. This card may be legally played only if the player has no cards of the current color.',
    'numbered-card-points': 'Value: it counts it`s face value.',
    'action-card-points': 'Value: 20 points.',
    'black-card-points': 'Value: 50 points.',
    'btn-play-comp': 'Play against computer',
    'btn-play-online': 'Online game',
    'btn-rules': 'How to play',
    'btn-developed': 'Developed by',
    'btn-share': 'Share',
    'btn-sound-on': 'Sound on',
    'btn-sound-off': 'Sound off',
    'btn-music-on': 'Music on',
    'btn-music-off': 'Music off',
    'btn-ru': 'RU',
    'btn-eng': 'ENG',
    'btn-main-page': 'MAIN PAGE',
    'btn-rules-page': 'RULES',
    'btn-winners-page': 'RESULTS',
  },
  'ru': {
    'rules-goal-title': 'Цель игры',
    'rules-goal-text': 'избавиться от всех карт быстрее противников.',
    'rules-play-title': 'Механика игры',
    'rules-play-text':
      'В свой ход положи карту в игровую колоду, при этом карта должна совпадать с верхней картой в игровой колоде по цвету или по картинке. Если у тебя нет подходящей карты, то возьми одну карту из колоды банка и, если она подходит, можешь сделать ход этой картой. Когда кладёшь в сброс свою предпоследнюю карту, нужно сказать «Уно!». Если не сказал этого и остальные игроки заметили это до начала хода следующего игрока, то берешь 2 карты из основной колоды.',
    'rules-points-title': 'Подсчет баллов',
    'rules-points-text':
      'Раунд выигрывает игрок, сбросивший все карты первым. Он получает количество баллов, равное сумме стоимости карт противников. Выигрывает игру игрок, первый набравший 250 баллов.',
    'numbered-card-title': 'Карта с цифрой',
    'plustwo-card-title': 'Возьми две',
    'plusfour-card-title': 'Закажи цвет и возьми четыре',
    'reverse-card-title': 'Ход обратно',
    'blocked-card-title': 'Пропусти ход',
    'multi-card-title': 'Закажи цвет',
    'numbered-card-descr': 'Карта кладется при совпадении цвета или цифры.',
    'plustwo-card-descr':
      'Cледующий игрок берёт 2 карты из колоды банка и пропускает свой ход. Эту карту следующий игрок не может класть поверх такой же или карты `Закажи цвет и возьми четыре` в целях суммирования.',
    'plusfour-card-descr':
      'Закажи цвет и следующий игрок берёт 4 карты и пропускает ход. Эту карту следующий игрок не может класть поверх такой же или карты `Возьми две` в целях суммирования. Ей нельзя ходить, если есть карта, по цвету совпадающая с верхней картой в игровой колоде. Если это первая карта в игре — она возвращается в колоду и берется другая карта.',
    'reverse-card-descr': 'Направление хода меняется',
    'blocked-card-descr': 'Cледующий по направлению игры игрок пропускает ход.',
    'multi-card-descr':
      'Закажи цвет и следующий игрок должен сделать ход либо картой заказанного цвета, либо карту с чёрным фоном. Этой картой нельзя ходить, если есть карта, по цвету совпадающая с верхней картой в игровой колоде.',
    'numbered-card-points': 'Стоимость: по значению на карте',
    'action-card-points': 'Стоимость: 20 баллов',
    'black-card-points': 'Стоимость: 50 баллов',
    'btn-play-comp': 'Играть против компьютера',
    'btn-play-online': 'Онлайн игра',
    'btn-rules': 'Правила игры',
    'btn-developed': 'Разработчики',
    'btn-share': 'Поделиться',
    'btn-sound-on': 'Звук вкл.',
    'btn-sound-off': 'Звук выкл.',
    'btn-music-on': 'Музыка вкл.',
    'btn-music-off': 'Музфка выкл.',
    'btn-ru': 'РУС',
    'btn-eng': 'АНГ',
    'btn-main-page': 'ГЛАВНАЯ СТРАНИЦА',
    'btn-rules-page': 'ПРАВИЛА ИГРЫ',
    'btn-winners-page': 'ТАБЛИЦА РЕЗУЛЬТАТОВ',
  },
};
