export default function (color) {
  let start = color.start.indexOf('(') + 1,
      end = color.start.indexOf(')');

  let colorArr = color.start.substring(start, end).split(',').map(ch => ch*1);

  if(colorArr[2] < 120){
    colorArr[2]++;
  }
  else if(colorArr[1] < 45){
    colorArr[1]++;
  }
  else if(colorArr[0] < 255){
    colorArr[0]++;
  }
  else{
    colorArr[0] = colorArr[1] = colorArr[2] = 0;
  }

  return {
    start: `rgb(${colorArr[0]},
                ${colorArr[1]},
                ${colorArr[2]})`,
    end: color.start
  };
}
