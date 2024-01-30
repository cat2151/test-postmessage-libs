function postmateChildToParent() {
  const handshake = new Postmate.Model({
    // Expose your model to the Parent. Property values may be functions, promises, or regular values
    height: () => document.height || document.body.offsetHeight,
    onCompleteHandshakeParent: onCompleteHandshakeParent,
    onChangeParent: onChangeParent
  });

  handshake.then(parent => {
    console.log('child from parent : handshake is complete');
    parent.emit('onCompleteHandshakeChild', '"Hello, World!" by child');

    textarea.addEventListener("input", onChangeTextarea);
    function onChangeTextarea() {
      console.log(`child : onChangeTextarea : emit data : [${textarea.value}]`);
      parent.emit('onChangeChild', textarea.value);
    }
  });

  // parentとの双方向通信のtest用
  const textarea = document.querySelector("#textarea-to-parent");

  // parentからcallされる
  function onCompleteHandshakeParent(data) {
    console.log(`child from parent : onCompleteHandshakeParent : received data : [${data}]`);
  }
  function onChangeParent(data) {
    console.log(`child from parent : onChangeParent : received data : [${data}]`);
    textarea.value = data;
  }
}

function postmateChildToGrandchild() {
  const handshake = new Postmate({
    url: './grandchild.html',
  });

  handshake.then(grandchild => {
    console.log('child to grandchild : handshake is complete');
    grandchild.call('onCompleteHandshakeChild', '"Hello, World!" by child');

    grandchild.get('height')
    .then(height => grandchild.frame.style.height = `${height * 1.5}px`);
      // ↑ 見切れる。原因不明。取り急ぎ height * 1.5 した

    // Listen to a particular event from the grandchild
    grandchild.on('onCompleteHandshakeGrandChild', data => {
      console.log(`child : onCompleteHandshakeGrandChild : received data : [${data}]`);
    });
    grandchild.on('onChangeGrandChild', data => {
      console.log(`child : onChangeGrandChild : received data : [${data}]`);
      textarea.value = data;
    });

    // grandchildとの双方向通信のtest用
    let textarea = document.querySelector("#textarea-to-grandchild");
    textarea.addEventListener("input", onChangeTextarea);
    function onChangeTextarea() {
      console.log(`child : onChangeTextarea : call data : [${textarea.value}]`);
      grandchild.call('onChangeChild', textarea.value);
    }
  });
}

postmateChildToParent();
postmateChildToGrandchild();
