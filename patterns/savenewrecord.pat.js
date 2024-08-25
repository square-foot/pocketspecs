
const collection = $app.dao().findCollectionByNameOrId(_arg1_)
 _arg3_ = new Record(collection,_arg2_)

$app.dao().saveRecord(_arg3_)
