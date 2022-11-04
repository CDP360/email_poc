import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import EmailEditor from '../../../src';
const dataSample = require('./sample.json');

var data = dataSample;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
`;

const Bar = styled.div`
  flex: 1;
  background-color: #61dafb;
  color: #000;
  padding: 10px;
  display: flex;
  max-height: 40px;

  h1 {
    flex: 1;
    font-size: 16px;
    text-align: left;
  }

  button {
    flex: 1;
    padding: 10px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    background-color: #000;
    color: #fff;
    border: 0px;
    max-width: 150px;
    cursor: pointer;
  }
`;

const Example = (props) => {
  // const [user_name, setUserName] = useState();
  const [logo, setLogo] = useState(
    'https://assets.cdn.msgsndr.com/dJs02EcmedN7BV0yEpv4/media/62eb92ccef6fa889c148e24d.jpeg'
  );
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();

  useEffect(() => {
    let id = '6360fbb6ce0d9a5eea8c9627';
    axios
      .get('http://localhost:8080/messages/cartlist?user_id=' + id)
      .then((res) => {
        if (res.status == 200) {
          console.log('dsdsd', res.data);
          let userName = 'kalai';
          let htmlname = `<p style=\"line-height: 140%; text-align: center; font-size: 14px;\"><strong><span style=\"font-size: 16px; line-height: 22.4px;\">Hey ${userName}!</span></strong></p>`;
          localStorage.setItem('user_name', userName);
          localStorage.setItem('nameTag', htmlname);

          res.data.forEach((element, num) => {
            console.log(element.image);
            if (num == 0) {
              console.log('sss', element.image);
              setImage1(element.image);
              localStorage.setItem('img1', element.image);
            }
            if (num == 1) {
              setImage2(element.image);
              localStorage.setItem('img2', element.image);
            }
            if (num == 2) {
              setImage3(element.image);
              localStorage.setItem('img3', element.image);
            }
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log('x1', image1);

  const emailEditorRef = useRef(null);

  const saveDesign = () => {
    emailEditorRef.current.editor.saveDesign((design) => {
      console.log('saveDesign', design);
      alert('Design JSON has been logged in your developer console.');
    });
  };
  const Email = () => {
    return (window.location.href = 'http://localhost:3000/');
  };
  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
      let data1 = {
        data: html,
      };
      axios
        .post(
          'http://localhost:8080/email/emailsent?name=vimal&email_id=' +
            'vimal@cdp360.com',
          data1
        )
        .then((res) => {
          console.log(res);
          Email();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  // const ters = <img src={image1} alt="no image" />;

  const onDesignLoad = (data) => {
    console.log('onDesignLoad', data);
  };

  const onLoad = () => {
    console.log('onLoad');

    emailEditorRef.current.editor.addEventListener(
      'design:loaded',
      onDesignLoad
    );

    var cartList = [
      {
        id: 'DNrfIPkutg',
        cells: [1, 1],
        columns: [
          {
            id: 'H3UGS9mLqd',
            contents: [
              {
                id: 'N89QkLpkI-',
                type: 'image',
                values: {
                  containerPadding: '23px',
                  anchor: '',
                  src: {
                    url: localStorage.getItem('img1'),
                    width: 720,
                    height: 480,
                    autoWidth: false,
                    maxWidth: '79%',
                  },
                  textAlign: 'center',
                  altText: 'Image',
                  action: {
                    name: 'web',
                    values: {
                      href: '',
                      target: '_blank',
                    },
                  },
                  hideDesktop: false,
                  displayCondition: null,
                  _meta: {
                    htmlID: 'u_content_image_5',
                    htmlClassNames: 'u_content_image',
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                },
              },
              {
                id: '2ePLEnxofX',
                type: 'text',
                values: {
                  containerPadding: '10px 10px 0px',
                  anchor: '',
                  textAlign: 'center',
                  lineHeight: '140%',
                  linkStyle: {
                    inherit: true,
                    linkColor: '#0000ee',
                    linkHoverColor: '#0000ee',
                    linkUnderline: true,
                    linkHoverUnderline: true,
                  },
                  hideDesktop: false,
                  displayCondition: null,
                  _meta: {
                    htmlID: 'u_content_text_12',
                    htmlClassNames: 'u_content_text',
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                  text: '<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 22.4px;"><strong><span style="line-height: 22.4px; font-size: 16px;">Ray-Ban</span></strong></span></p>',
                },
              },
              {
                id: 'JFePfgKYk_',
                type: 'text',
                values: {
                  containerPadding: '10px',
                  anchor: '',
                  textAlign: 'center',
                  lineHeight: '140%',
                  linkStyle: {
                    inherit: true,
                    linkColor: '#0000ee',
                    linkHoverColor: '#0000ee',
                    linkUnderline: true,
                    linkHoverUnderline: true,
                  },
                  hideDesktop: false,
                  displayCondition: null,
                  _meta: {
                    htmlID: 'u_content_text_13',
                    htmlClassNames: 'u_content_text',
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                  text: '<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 22.4px;"><strong><span style="line-height: 22.4px; font-size: 16px;">$20</span></strong></span></p>',
                },
              },
              {
                id: 'tHfZ4TNZ7D',
                type: 'button',
                values: {
                  containerPadding: '10px',
                  anchor: '',
                  href: {
                    name: 'web',
                    values: {
                      href: '',
                      target: '_blank',
                    },
                  },
                  buttonColors: {
                    color: '#FFFFFF',
                    backgroundColor: '#262425',
                    hoverColor: '#FFFFFF',
                    hoverBackgroundColor: '#3AAEE0',
                  },
                  size: {
                    autoWidth: true,
                    width: '100%',
                  },
                  textAlign: 'center',
                  lineHeight: '120%',
                  padding: '10px 20px',
                  border: {},
                  borderRadius: '0px',
                  hideDesktop: false,
                  displayCondition: null,
                  _meta: {
                    htmlID: 'u_content_button_5',
                    htmlClassNames: 'u_content_button',
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                  text: '<span style="font-size: 14px; line-height: 16.8px;">Buy Now</span>',
                  calculatedWidth: 104,
                  calculatedHeight: 36,
                },
              },
            ],
            values: {
              _meta: {
                htmlID: 'u_column_21',
                htmlClassNames: 'u_column',
              },
              border: {},
              padding: '0px',
              backgroundColor: '',
            },
          },
          {
            id: 'oq8POGGuS0',
            contents: [
              {
                id: 'bSCv6xONew',
                type: 'image',
                values: {
                  containerPadding: '24px',
                  anchor: '',
                  src: {
                    url: localStorage.getItem('img2'),
                    width: 400,
                    height: 224,
                    autoWidth: false,
                    maxWidth: '90%',
                  },
                  textAlign: 'center',
                  altText: 'Image',
                  action: {
                    name: 'web',
                    values: {
                      href: '',
                      target: '_blank',
                    },
                  },
                  hideDesktop: false,
                  displayCondition: null,
                  _meta: {
                    htmlID: 'u_content_image_6',
                    htmlClassNames: 'u_content_image',
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                },
              },
              {
                id: 'mN4PAY4KRr',
                type: 'text',
                values: {
                  containerPadding: '10px 10px 0px',
                  anchor: '',
                  textAlign: 'center',
                  lineHeight: '140%',
                  linkStyle: {
                    inherit: true,
                    linkColor: '#0000ee',
                    linkHoverColor: '#0000ee',
                    linkUnderline: true,
                    linkHoverUnderline: true,
                  },
                  hideDesktop: false,
                  displayCondition: null,
                  _meta: {
                    htmlID: 'u_content_text_14',
                    htmlClassNames: 'u_content_text',
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                  text: '<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 22.4px;"><strong><span style="line-height: 22.4px; font-size: 16px;">Ray-Ban</span></strong></span></p>',
                },
              },
              {
                id: 'hRmeZr9B_p',
                type: 'text',
                values: {
                  containerPadding: '10px',
                  anchor: '',
                  textAlign: 'center',
                  lineHeight: '140%',
                  linkStyle: {
                    inherit: true,
                    linkColor: '#0000ee',
                    linkHoverColor: '#0000ee',
                    linkUnderline: true,
                    linkHoverUnderline: true,
                  },
                  hideDesktop: false,
                  displayCondition: null,
                  _meta: {
                    htmlID: 'u_content_text_15',
                    htmlClassNames: 'u_content_text',
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                  text: '<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 22.4px;"><strong><span style="line-height: 22.4px; font-size: 16px;">$25</span></strong></span></p>',
                },
              },
              {
                id: 'v4sPVIMYmw',
                type: 'button',
                values: {
                  containerPadding: '10px',
                  anchor: '',
                  href: {
                    name: 'web',
                    values: {
                      href: '',
                      target: '_blank',
                    },
                  },
                  buttonColors: {
                    color: '#FFFFFF',
                    backgroundColor: '#262425',
                    hoverColor: '#FFFFFF',
                    hoverBackgroundColor: '#3AAEE0',
                  },
                  size: {
                    autoWidth: true,
                    width: '100%',
                  },
                  textAlign: 'center',
                  lineHeight: '120%',
                  padding: '10px 20px',
                  border: {},
                  borderRadius: '0px',
                  hideDesktop: false,
                  displayCondition: null,
                  _meta: {
                    htmlID: 'u_content_button_6',
                    htmlClassNames: 'u_content_button',
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                  text: '<span style="font-size: 14px; line-height: 16.8px;">Buy Now</span>',
                  calculatedWidth: 96,
                  calculatedHeight: 37,
                },
              },
            ],
            values: {
              _meta: {
                htmlID: 'u_column_22',
                htmlClassNames: 'u_column',
              },
              border: {},
              padding: '0px',
              backgroundColor: '',
            },
          },
        ],
        values: {
          displayCondition: null,
          columns: false,
          backgroundColor: '',
          columnsBackgroundColor: '#ffffff',
          backgroundImage: {
            url: '',
            fullWidth: true,
            repeat: false,
            center: true,
            cover: false,
          },
          padding: '0px',
          anchor: '',
          hideDesktop: false,
          _meta: {
            htmlID: 'u_row_18',
            htmlClassNames: 'u_row',
          },
          selectable: true,
          draggable: true,
          duplicatable: true,
          deletable: true,
          hideable: true,
          hideMobile: false,
          noStackMobile: false,
        },
      },
      {
        id: 'DNrfIPkutg1',
        cells: [1, 1],
        columns: [
          {
            id: 'H3UGS9mLqd',
            contents: [
              {
                id: 'N89QkLpkI-',
                type: 'image',
                values: {
                  containerPadding: '23px',
                  anchor: '',
                  src: {
                    url: localStorage.getItem('img1'),
                    width: 720,
                    height: 480,
                    autoWidth: false,
                    maxWidth: '79%',
                  },
                  textAlign: 'center',
                  altText: 'Image',
                  action: {
                    name: 'web',
                    values: {
                      href: '',
                      target: '_blank',
                    },
                  },
                  hideDesktop: false,
                  displayCondition: null,
                  _meta: {
                    htmlID: 'u_content_image_5',
                    htmlClassNames: 'u_content_image',
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                },
              },
              {
                id: '2ePLEnxofX',
                type: 'text',
                values: {
                  containerPadding: '10px 10px 0px',
                  anchor: '',
                  textAlign: 'center',
                  lineHeight: '140%',
                  linkStyle: {
                    inherit: true,
                    linkColor: '#0000ee',
                    linkHoverColor: '#0000ee',
                    linkUnderline: true,
                    linkHoverUnderline: true,
                  },
                  hideDesktop: false,
                  displayCondition: null,
                  _meta: {
                    htmlID: 'u_content_text_12',
                    htmlClassNames: 'u_content_text',
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                  text: '<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 22.4px;"><strong><span style="line-height: 22.4px; font-size: 16px;">Ray-Ban</span></strong></span></p>',
                },
              },
              {
                id: 'JFePfgKYk_',
                type: 'text',
                values: {
                  containerPadding: '10px',
                  anchor: '',
                  textAlign: 'center',
                  lineHeight: '140%',
                  linkStyle: {
                    inherit: true,
                    linkColor: '#0000ee',
                    linkHoverColor: '#0000ee',
                    linkUnderline: true,
                    linkHoverUnderline: true,
                  },
                  hideDesktop: false,
                  displayCondition: null,
                  _meta: {
                    htmlID: 'u_content_text_13',
                    htmlClassNames: 'u_content_text',
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                  text: '<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 22.4px;"><strong><span style="line-height: 22.4px; font-size: 16px;">$20</span></strong></span></p>',
                },
              },
              {
                id: 'tHfZ4TNZ7D',
                type: 'button',
                values: {
                  containerPadding: '10px',
                  anchor: '',
                  href: {
                    name: 'web',
                    values: {
                      href: '',
                      target: '_blank',
                    },
                  },
                  buttonColors: {
                    color: '#FFFFFF',
                    backgroundColor: '#262425',
                    hoverColor: '#FFFFFF',
                    hoverBackgroundColor: '#3AAEE0',
                  },
                  size: {
                    autoWidth: true,
                    width: '100%',
                  },
                  textAlign: 'center',
                  lineHeight: '120%',
                  padding: '10px 20px',
                  border: {},
                  borderRadius: '0px',
                  hideDesktop: false,
                  displayCondition: null,
                  _meta: {
                    htmlID: 'u_content_button_5',
                    htmlClassNames: 'u_content_button',
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                  text: '<span style="font-size: 14px; line-height: 16.8px;">Buy Now</span>',
                  calculatedWidth: 104,
                  calculatedHeight: 36,
                },
              },
            ],
            values: {
              _meta: {
                htmlID: 'u_column_21',
                htmlClassNames: 'u_column',
              },
              border: {},
              padding: '0px',
              backgroundColor: '',
            },
          },
          {
            id: 'oq8POGGuS0',
            contents: [
              {
                id: 'bSCv6xONew',
                type: 'image',
                values: {
                  containerPadding: '24px',
                  anchor: '',
                  src: {
                    url: localStorage.getItem('img3'),
                    width: 400,
                    height: 224,
                    autoWidth: false,
                    maxWidth: '90%',
                  },
                  textAlign: 'center',
                  altText: 'Image',
                  action: {
                    name: 'web',
                    values: {
                      href: '',
                      target: '_blank',
                    },
                  },
                  hideDesktop: false,
                  displayCondition: null,
                  _meta: {
                    htmlID: 'u_content_image_6',
                    htmlClassNames: 'u_content_image',
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                },
              },
              {
                id: 'mN4PAY4KRr',
                type: 'text',
                values: {
                  containerPadding: '10px 10px 0px',
                  anchor: '',
                  textAlign: 'center',
                  lineHeight: '140%',
                  linkStyle: {
                    inherit: true,
                    linkColor: '#0000ee',
                    linkHoverColor: '#0000ee',
                    linkUnderline: true,
                    linkHoverUnderline: true,
                  },
                  hideDesktop: false,
                  displayCondition: null,
                  _meta: {
                    htmlID: 'u_content_text_14',
                    htmlClassNames: 'u_content_text',
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                  text: '<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 22.4px;"><strong><span style="line-height: 22.4px; font-size: 16px;">Ray-Ban</span></strong></span></p>',
                },
              },
              {
                id: 'hRmeZr9B_p',
                type: 'text',
                values: {
                  containerPadding: '10px',
                  anchor: '',
                  textAlign: 'center',
                  lineHeight: '140%',
                  linkStyle: {
                    inherit: true,
                    linkColor: '#0000ee',
                    linkHoverColor: '#0000ee',
                    linkUnderline: true,
                    linkHoverUnderline: true,
                  },
                  hideDesktop: false,
                  displayCondition: null,
                  _meta: {
                    htmlID: 'u_content_text_15',
                    htmlClassNames: 'u_content_text',
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                  text: '<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 22.4px;"><strong><span style="line-height: 22.4px; font-size: 16px;">$25</span></strong></span></p>',
                },
              },
              {
                id: 'v4sPVIMYmw',
                type: 'button',
                values: {
                  containerPadding: '10px',
                  anchor: '',
                  href: {
                    name: 'web',
                    values: {
                      href: '',
                      target: '_blank',
                    },
                  },
                  buttonColors: {
                    color: '#FFFFFF',
                    backgroundColor: '#262425',
                    hoverColor: '#FFFFFF',
                    hoverBackgroundColor: '#3AAEE0',
                  },
                  size: {
                    autoWidth: true,
                    width: '100%',
                  },
                  textAlign: 'center',
                  lineHeight: '120%',
                  padding: '10px 20px',
                  border: {},
                  borderRadius: '0px',
                  hideDesktop: false,
                  displayCondition: null,
                  _meta: {
                    htmlID: 'u_content_button_6',
                    htmlClassNames: 'u_content_button',
                  },
                  selectable: true,
                  draggable: true,
                  duplicatable: true,
                  deletable: true,
                  hideable: true,
                  hideMobile: false,
                  text: '<span style="font-size: 14px; line-height: 16.8px;">Buy Now</span>',
                  calculatedWidth: 96,
                  calculatedHeight: 37,
                },
              },
            ],
            values: {
              _meta: {
                htmlID: 'u_column_22',
                htmlClassNames: 'u_column',
              },
              border: {},
              padding: '0px',
              backgroundColor: '',
            },
          },
        ],
        values: {
          displayCondition: null,
          columns: false,
          backgroundColor: '',
          columnsBackgroundColor: '#ffffff',
          backgroundImage: {
            url: '',
            fullWidth: true,
            repeat: false,
            center: true,
            cover: false,
          },
          padding: '0px',
          anchor: '',
          hideDesktop: false,
          _meta: {
            htmlID: 'u_row_18',
            htmlClassNames: 'u_row',
          },
          selectable: true,
          draggable: true,
          duplicatable: true,
          deletable: true,
          hideable: true,
          hideMobile: false,
          noStackMobile: false,
        },
      },
    ];

    // data.body.rows.splice(3, 0, cartList[1]);
    // if (h.id == 'DNrfIPkutg') {
    //   console.log('- DNrfIPkutg', h, num);
    //   h.columns.push(cartList[1]);
    // console.log(h);
    // }
    // });
    if (localStorage.getItem('img1')) {
      let result = data.body.rows.map((e) => {
        e.columns.map((h) => {
          h.contents.filter((j, num) => {
            if (j.type == 'image' && num == 0) {
              console.log(j.id);
              if (j.id == 'E6QqYzhIDp') {
                j.values.src.url = logo;
              }
              if (j.id == 'N89QkLpkI-') {
                j.values.src.url = localStorage.getItem('img1');
              }
              if (j.id == 'bSCv6xONew') {
                j.values.src.url = localStorage.getItem('img2');
              }
              if (j.id == 'bSCv6xONew1') {
                j.values.src.url = localStorage.getItem('img3');
              }
            }
            if (j.type == 'text' && num == 2) {
              j.values.text = localStorage.getItem('nameTag');
            }
          });
        });
        // if (num == 3) {
        // }
        if (e.id == 'DNrfIPkutg') {
          // console.log(cartList);
          e = cartList[0];
        }

        // console.log(e);

        return e;
      });
      data.body.rows = result;
    }
    emailEditorRef.current.editor.loadDesign(data);
  };

  const onReady = () => {
    console.log('onReady');
  };

  return (
    <Container>
      <Bar>
        <h1>CDP360</h1>

        <button onClick={saveDesign}>Save Design</button>
        <button onClick={exportHtml}>Send Mail</button>
      </Bar>

      <React.StrictMode>
        <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
      </React.StrictMode>
    </Container>
  );
};

export default Example;
