try {
     _arg5_ = $app.dao().findRecordById(_arg1_ , _arg2_ )

    const form = new RecordUpsertForm($app , _arg5_ )
    form.loadData(_arg3_)
  
    const collectionDef = $app.dao().findCollectionByNameOrId(_arg1_)
    const relationList = []
    const schemaArray = JSON.parse(JSON.stringify(collectionDef.schema))
    
    schemaArray.forEach((e)=>{
        if(e.type == "relation"){
          relationList.push(e.name)
          }
        }
       )
    if(relationList.length >0){
       $app.dao().expandRecord(_arg5_, relationList, null);
       }

    form.submit();


    _arg4_ = true;
  } catch(e){
    _arg4_ = false;
  }
