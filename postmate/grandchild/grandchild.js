function postmateGrandchild() {
  const handshake = new Postmate.Model({
    // Expose your model to the Parent. Property values may be functions, promises, or regular values
    height: () => document.height || document.body.offsetHeight,
    onCompleteHandshakeChild: onCompleteHandshakeChild,
    onChangeChild: onChangeChild
  });

  handshake.then(child => {
    console.log('grandchild : handshake is complete');
    child.emit('onCompleteHandshakeGrandChild', '"Hello, World!" by grandchild');

    textarea.addEventListener("input", onChangeTextarea);
    function onChangeTextarea() {
      console.log(`grandchild : onChangeTextarea : emit data : [${textarea.value}]`);
      child.emit('onChangeGrandChild', textarea.value);
    }
  });

  // childとの双方向通信のtest用
  const textarea = document.querySelector("#textarea");

  // childからcallされる
  function onCompleteHandshakeChild(data) {
    console.log(`grandchild from child : onCompleteHandshakeChild : received data : [${data}]`);
  }
  function onChangeChild(data) {
    console.log(`grandchild from child : onChangeChild : received data : [${data}]`);
    textarea.value = data;
  }
}

postmateGrandchild();
