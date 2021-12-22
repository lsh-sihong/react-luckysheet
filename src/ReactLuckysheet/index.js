import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import Frame, { useFrame } from 'react-frame-component';
import { cloneDeep } from 'lodash';
import './index.less';


const Inner = (props) => {
  const {
    id,
    style,
    refs
  } = props
  const defaultOptions = {
    container: id, //luckysheet为容器id
    showinfobar: false,
    lang: 'zh',
    // cellRightClickConfig: {
    //   copy: false
    // }
  };
  // useImperativeHandle(ref, () => ({
  //   window: () => window
  // }))
  const { document, window } = useFrame();
  const mergeOpt = {
    ...defaultOptions,
    ...props.options
  }
  const init = () => {
    if (refs) {
      refs.current = window.luckysheet
      refs.current.create(mergeOpt);
    }
  }

  useEffect(() => {
    if (!document.getElementById('pluginsCss')) {
      const el = document.createElement('link');
      el.id = "pluginsCss";
      el.rel = "stylesheet";
      el.href = "luckysheet/plugins/css/pluginsCss.css";
      document.body.appendChild(el);
    }
    if (!document.getElementById('plugins')) {
      const el = document.createElement('link');
      el.id = "plugins";
      el.rel = "stylesheet";
      el.href = "luckysheet/plugins/plugins.css";
      document.body.appendChild(el);
    }
    if (!document.getElementById('luckysheetCss')) {
      const el = document.createElement('link');
      el.id = "luckysheetCss";
      el.rel = "stylesheet";
      el.href = "luckysheet/css/luckysheet.css";
      document.body.appendChild(el);
    }
    if (!document.getElementById('iconfont')) {
      const el = document.createElement('link');
      el.id = "iconfont";
      el.rel = "stylesheet";
      el.href = "luckysheet/assets/iconfont/iconfont.css";
      document.body.appendChild(el);
    }
    if (!document.getElementById('pluginjs')) {
      const el = document.createElement('script');
      el.id = "pluginjs";
      el.src = "luckysheet/plugins/js/plugin.js";
      el.async = false;
      document.body.appendChild(el);
    }
    if (!document.getElementById('luckysheetjs')) {
      const el = document.createElement('script');
      el.id = "luckysheetjs";
      el.src = "luckysheet/luckysheet.umd.js";
      el.async = false;
      document.body.appendChild(el);
      el.onload = () => {
        init();
      }
    }
    if (props.options && !props.options.allowCopy) {
      document.addEventListener('copy', () => {
        const arr = refs.current.getRange()
        refs.current.enterEditMode();
        refs.current.exitEditMode();
        refs.current.setRangeShow(arr)
      });
    }
  }, []);
  useEffect(() => {
    if (refs && refs.current) {
      refs.current.create(mergeOpt);
    }
  }, [props.options]);
  return <div
    id={id}
    style={style}
  />
}
// const WithInner = forwardRef((props, ref) => <Inner {...props} ref={ref} />)
const Page = (props) => {
  // const instance = useRef()
  const {
    style, refs
  } = props

  const mergeStyle = {
    ...{
      width: '100%',
      height: 700
    },
    ...style
  }
  return (
    <Frame style={mergeStyle}>
      {/* {WithInner(props,ref)} */}
      <Inner {...props} style={mergeStyle} refs={refs} />
    </Frame>
  );
};

// Page.propTypes = {
//   id: PropTypes.string,
//   width: PropTypes.string,
//   height: PropTypes.string,
//   onSuccess: PropTypes.func,
//   onFail: PropTypes.func,
//   onerror: PropTypes.func
// }

export default forwardRef((props, ref) => <Page {...props} refs={ref} />);
