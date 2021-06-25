const player =add([
  sprite('player'),
  scale(0.7),
  pos(20,20),body()
])
const move_speed =200;
keyDown("right", () => {
    player.move(move_speed, 0);
});
keyDown("left", () => {
    player.move(-move_speed, 0);
});

addLevel(['    ',
'    ',
'  @@@ ',
'   ',
'xxxxxxxxxxxxxxxxxxxxxx'],
{width:40,height:40,
'x':[sprite('ground'),solid()]
, '@':[sprite('enemy'),body(),scale(.5),'dangerous']
})
player.collides("dangerous",()=>{
  destroy(player)
})