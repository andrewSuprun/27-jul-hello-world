const robot = {
  version: 16,
  name: 'Cleaner 3000',
  released: true,
  creator: { name: 'Vlad' },
};


function getRobotSchema(robot) {
  const robot1 = {};
  for (let key in robot){
    
  robot1[key] = typeof robot[key];
  }
console.log(robot1);
};

getRobotSchema(robot);


