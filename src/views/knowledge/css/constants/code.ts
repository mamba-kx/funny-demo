export const CODE_DETAIL = {
  文字交融展开: `
  <!-- 文字交融展开 -->
  <template>
    <div class="wrap">
      <h1>文字聚合、文字交融</h1>
    </div>
  </template>

  <style lang="scss" scoped>
  .wrap {
    @include wh(100%, 100%);
    background-color: #000;
    @include dfc;
    filter: contrast(10);
    h1 {
      color: #fff;
      font-weight: bold;
      letter-spacing: 0;
      padding-top: 20px;
      animation: expand 2s forwards;
    }
  }

  @keyframes expand {
    from {
      letter-spacing: -51px;
      filter: blur(5px);
    }
    to {
      letter-spacing: 0px;
      filter: blur(1px);
    }
  }
  </style>
  `,
  文字逐渐出现: `
  <!-- 文字逐渐出现 -->
  <template>
    <div class="wrap">
      <p>
        Please go through the tutorial steps at your own pace and challenge
        yourself using the editor on the right hand side. Here PixiJS has already
        been included as guided under the Getting Started section. Let's start
        with the creation of a PixiJS canvas application and add its view to the
        DOM.
      </p>
      <p class="eraser">
        <span class="text">
          Please go through the tutorial steps at your own pace and challenge
          yourself using the editor on the right hand side. Here PixiJS has
          already been included as guided under the Getting Started section. Let's
          start with the creation of a PixiJS canvas application and add its view
          to the DOM.
        </span>
      </p>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .wrap {
    @include wh(100%, 100%);
    background-color: #000;
    position: relative;
    p {
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      @include center;
    }
    .eraser {
      @include center;
      .text {
        --p: 0%;
        background: linear-gradient(
          to right,
          #0000 var(--p),
          #000 calc(var(--p) + 100px)
        );
        color: transparent;
        animation: eraser 8s linear infinite;
      }
    }
  }
  
  @property --p {
    syntax: "<percentage>";
    inherits: true;
    initial-value: 0%;
  }
  
  @keyframes eraser {
    to {
      --p: 100%;
    }
  }
  </style>
  `,
  重复渐变边框: `
  <!-- 重复渐变边框 -->
  <template>
    <div class="wrap">
      <div class="box">
        <div class="container">
          <p>
            Please go through the tutorial steps at your own pace and challenge
            yourself using the editor on the right hand side. Here PixiJS has
            already been included as guided under the Getting Started section.
            Let's start with the creation of a PixiJS canvas application and add
            its view to the DOM.
          </p>
        </div>
      </div>
    </div>
  </template>

  <style lang="scss" scoped>
  .wrap {
    @include wh(100%, 100%);
    background-color: #000;
    position: relative;
    .box {
      @include center;
      width: 350px;
      border-radius: 5px;
      background: repeating-linear-gradient(
        -45deg,
        red 0px 10px,
        #fff 10px 20px,
        blue 20px 30px,
        #fff 10px 20px
      );
      background-position: -20px -20px;
      background-size: 200% 200%;
      padding: 5px;
      transition: 0.5s;
      .container {
        border-radius: 5px;
        background-color: #fff;
        p {
          color: #000;
          font-size: 20px;
          font-weight: bold;
        }
      }
    }
    .box:hover {
      background-position: 0 0;
    }
  }
  </style>  
  `
};
