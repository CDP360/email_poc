import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import EmailEditor from '../../../../email';
const dataSample = require('./sample.json');
const dataSample1 = require('./sample1.json');

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

  useEffect(() => {
    localStorage.clear();
  }, []);

  // console.log('x1', image1);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const load = () => {
    axios
      .get('http://localhost:8080/messages/cartlist')
      .then((res) => {
        if (res.status == 200) {
          console.log('dsdsd', res.data);
          for (let index = 0; index < res.data.length; index++) {
            setTimeout(async function () {
              await sleep(index * 5000);

              const element = res.data[index];

              let userName = element[0].user_name;
              var logo = element[0].dp;
              let htmlname = `<p style=\"line-height: 140%; text-align: center; font-size: 14px;\"><strong><span style=\"font-size: 16px; line-height: 22.4px;\">Hey ${userName}!</span></strong></p>`;
              var user_name = userName;
              var nameTag = htmlname;
              var email = element[0].email;

              var img1;
              var title1;
              var price1;
              var img2;
              var title2;
              var price2;

              // if (element.length != 1) {
              element.forEach((item, num) => {
                console.log('000', element.length);
                if (num == 1) {
                  console.log('sss', item.image);
                  img1 = item.image;
                  title1 = item.title;
                  price1 = item.price;
                }
                if (num == 2) {
                  img2 = item.image;
                  title2 = item.title;
                  price2 = item.price;
                }
              });
              // }
              // onLoad();
              // setTimeout(function () {
              // exportHtml();
              // }, 5000);

              // load design .....
              console.log('onLoad');

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
                              url: img1,
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
                            text: `<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 22.4px;"><strong><span style="line-height: 22.4px; font-size: 16px;">${title1}</span></strong></span></p>`,
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
                            text: `<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 22.4px;"><strong><span style="line-height: 22.4px; font-size: 16px;">$${price1}</span></strong></span></p>`,
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
                              url: img2,
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
                            text: `<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 22.4px;"><strong><span style="line-height: 22.4px; font-size: 16px;">${title2}</span></strong></span></p>`,
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
                            text: `<p style="font-size: 14px; line-height: 140%;"><span style="font-size: 16px; line-height: 22.4px;"><strong><span style="line-height: 22.4px; font-size: 16px;">$${price2}</span></strong></span></p>`,
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
                              url: img1,
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
                              url: img2,
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

              if (img1) {
                let result = data.body.rows.map((e) => {
                  e.columns.map((h) => {
                    h.contents.filter((j, num) => {
                      if (j.type == 'image' && num == 0) {
                        console.log(j.id);
                        if (j.id == 'E6QqYzhIDp') {
                          j.values.src.url = logo;
                        }
                        if (j.id == 'N89QkLpkI-') {
                          j.values.src.url = img1;
                        }
                        if (j.id == 'bSCv6xONew') {
                          j.values.src.url = img2;
                        }
                        // if (j.id == 'bSCv6xONew1') {
                        //   j.values.src.url = localStorage.getItem('img3');
                        // }
                      }
                      if (j.type == 'text' && num == 2) {
                        j.values.text = nameTag;
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

              // await sleep(index * 5000);

              emailEditorRef.current.editor.addEventListener(
                'design:loaded',
                onDesignLoad
              );
              emailEditorRef.current.editor.loadDesign(data);

              // export mail
              // await sleep(index * 1000);

              emailEditorRef.current.editor.exportHtml((data) => {
                const { design, html } = data;
                console.log('exportHtml', html);
                let data1 = {
                  data: html,
                };
                axios
                  .post(
                    'http://localhost:8080/email/emailsent?name=vimal&email_id=' +
                      email,
                    data1
                  )
                  .then((res) => {
                    // Email();
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              });
            }, 5000);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
  const exportHtml = () => {};

  // const ters = <img src={image1} alt="no image" />;

  const onDesignLoad = (data) => {
    console.log('onDesignLoad', data);
  };

  // const onLoad = () => {

  // };

  const onReady = () => {
    console.log('onReady');
  };

  return (
    <Container style={{ height: '670px' }}>
      {/* <Bar>
        <h1>CDP360</h1>
        <button onClick={saveDesign}>Save Design</button>
        <button onClick={exportHtml}>Send Mail</button>
      </Bar> */}

      <React.StrictMode>
        <EmailEditor ref={emailEditorRef} onLoad={load} onReady={onReady} />
      </React.StrictMode>
    </Container>
  );
};

export default Example;
