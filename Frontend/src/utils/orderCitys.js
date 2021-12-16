
export default function orderCitys(citys){
    const orderedCitys = citys.sort(
        function (c1,c2) {
            if (c1.name > c2.name) { 
              return 1;
            } else if (c1.name < c2.name) {
              return -1;
            } 
            return 0;
          }
    )
    return orderedCitys
}