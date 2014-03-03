(function(exports){

    function greeting(){
        return 'hello';
    }

    function thing(){
        return 'world';
    }

    function helloWorld(){
        return greeting() + ' ' + thing();
    }

    exports.helloWorld = helloWorld;

}(typeof exports === 'undefined' ? this['myModule']={} : exports))