console.log('uglearn.js loaded')

ug={}

loadData=function(url){
    //if(!url){url='https://opendata.socrata.com/resource/5tj6-ft8p.json'}
    if(!url){url='https://health.data.ny.gov/resource/5q8c-d6xq.json'}
    $.getJSON(url)
     .then(function(x){
         ug.rows=x
         console.log('you just loaded '+x.length+' rows of data')
         
     })

}

createCols=function(){
    ug.parms=Object.getOwnPropertyNames(ug.rows[0])
    ug.parms.forEach(function(p){
        4
    })
    4
}

loadData()