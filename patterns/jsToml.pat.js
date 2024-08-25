try{
    const rnd = $security.randomString(8);
    const tmp = $os.tempDir(); //tmp dir must be available on the server
    const inpfile = `${tmp}/${rnd}.json`;
    if(_arg2_ == "-jt"){
    $os.writeFile(inpfile, JSON.stringify(_arg1_), 777);
    } else {
        $os.writeFile(inpfile, _arg1_, 777);
    }
    //Note cvrt_json_toml.sh has to be in the same folder as the pocketbase executable 
    //and there was no change-dir that was done before invoking this 
    //It internally calls the excellent binary executable for converting json to toml and back
    //to json:  https://github.com/sclevine/yj
    const cmd = $os.exec('./cvrt_json_toml.sh',_arg2_,inpfile); 
   _arg3_ = String.fromCharCode(...cmd.output());
    $os.remove(inpfile);
    _arg4_ = true;
    } catch(ee){
        console.log(ee);
        _arg4_  = false;
        return c.string(200,'Error in conversion');
    }