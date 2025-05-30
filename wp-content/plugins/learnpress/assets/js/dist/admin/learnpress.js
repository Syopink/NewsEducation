/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/js/utils.js":
/*!********************************!*\
  !*** ./assets/src/js/utils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   listenElementCreated: () => (/* binding */ listenElementCreated),
/* harmony export */   listenElementViewed: () => (/* binding */ listenElementViewed),
/* harmony export */   lpAddQueryArgs: () => (/* binding */ lpAddQueryArgs),
/* harmony export */   lpAjaxParseJsonOld: () => (/* binding */ lpAjaxParseJsonOld),
/* harmony export */   lpClassName: () => (/* binding */ lpClassName),
/* harmony export */   lpFetchAPI: () => (/* binding */ lpFetchAPI),
/* harmony export */   lpGetCurrentURLNoParam: () => (/* binding */ lpGetCurrentURLNoParam),
/* harmony export */   lpOnElementReady: () => (/* binding */ lpOnElementReady),
/* harmony export */   lpSetLoadingEl: () => (/* binding */ lpSetLoadingEl),
/* harmony export */   lpShowHideEl: () => (/* binding */ lpShowHideEl)
/* harmony export */ });
/**
 * Utils functions
 *
 * @param url
 * @param data
 * @param functions
 * @since 4.2.5.1
 * @version 1.0.3
 */
const lpClassName = {
  hidden: 'lp-hidden',
  loading: 'loading'
};
const lpFetchAPI = (url, data = {}, functions = {}) => {
  if ('function' === typeof functions.before) {
    functions.before();
  }
  fetch(url, {
    method: 'GET',
    ...data
  }).then(response => response.json()).then(response => {
    if ('function' === typeof functions.success) {
      functions.success(response);
    }
  }).catch(err => {
    if ('function' === typeof functions.error) {
      functions.error(err);
    }
  }).finally(() => {
    if ('function' === typeof functions.completed) {
      functions.completed();
    }
  });
};

/**
 * Get current URL without params.
 *
 * @since 4.2.5.1
 */
const lpGetCurrentURLNoParam = () => {
  let currentUrl = window.location.href;
  const hasParams = currentUrl.includes('?');
  if (hasParams) {
    currentUrl = currentUrl.split('?')[0];
  }
  return currentUrl;
};
const lpAddQueryArgs = (endpoint, args) => {
  const url = new URL(endpoint);
  Object.keys(args).forEach(arg => {
    url.searchParams.set(arg, args[arg]);
  });
  return url;
};

/**
 * Listen element viewed.
 *
 * @param el
 * @param callback
 * @since 4.2.5.8
 */
const listenElementViewed = (el, callback) => {
  const observerSeeItem = new IntersectionObserver(function (entries) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        callback(entry);
      }
    }
  });
  observerSeeItem.observe(el);
};

/**
 * Listen element created.
 *
 * @param callback
 * @since 4.2.5.8
 */
const listenElementCreated = callback => {
  const observerCreateItem = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.addedNodes) {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType === 1) {
            callback(node);
          }
        });
      }
    });
  });
  observerCreateItem.observe(document, {
    childList: true,
    subtree: true
  });
  // End.
};

/**
 * Listen element created.
 *
 * @param selector
 * @param callback
 * @since 4.2.7.1
 */
const lpOnElementReady = (selector, callback) => {
  const element = document.querySelector(selector);
  if (element) {
    callback(element);
    return;
  }
  const observer = new MutationObserver((mutations, obs) => {
    const element = document.querySelector(selector);
    if (element) {
      obs.disconnect();
      callback(element);
    }
  });
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
};

// Parse JSON from string with content include LP_AJAX_START.
const lpAjaxParseJsonOld = data => {
  if (typeof data !== 'string') {
    return data;
  }
  const m = String.raw({
    raw: data
  }).match(/<-- LP_AJAX_START -->(.*)<-- LP_AJAX_END -->/s);
  try {
    if (m) {
      data = JSON.parse(m[1].replace(/(?:\r\n|\r|\n)/g, ''));
    } else {
      data = JSON.parse(data);
    }
  } catch (e) {
    data = {};
  }
  return data;
};

// status 0: hide, 1: show
const lpShowHideEl = (el, status = 0) => {
  if (!el) {
    return;
  }
  if (!status) {
    el.classList.add(lpClassName.hidden);
  } else {
    el.classList.remove(lpClassName.hidden);
  }
};

// status 0: hide, 1: show
const lpSetLoadingEl = (el, status) => {
  if (!el) {
    return;
  }
  if (!status) {
    el.classList.remove(lpClassName.loading);
  } else {
    el.classList.add(lpClassName.loading);
  }
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*******************************************!*\
  !*** ./assets/src/js/admin/learnpress.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./assets/src/js/utils.js");

const $ = jQuery;
const $doc = $(document);
const makePaymentsSortable = function makePaymentsSortable() {
  // Make payments sortable
  $('.learn-press-payments.sortable tbody').sortable({
    handle: '.dashicons-menu',
    helper(e, ui) {
      ui.children().each(function () {
        $(this).width($(this).width());
      });
      return ui;
    },
    axis: 'y',
    start(event, ui) {},
    stop(event, ui) {},
    update(event, ui) {
      const order = $(this).children().map(function () {
        return $(this).find('input[name="payment-order"]').val();
      }).get();
      $.post({
        url: '',
        data: {
          'lp-ajax': 'update-payment-order',
          order,
          nonce: $('input[name=lp-settings-nonce]').val()
        },
        success(response) {}
      });
    }
  });
};

/** Start Nhamdv code */

const lpMetaboxCustomFields = () => {
  $('.lp-metabox__custom-fields').on('click', '.lp-metabox-custom-field-button', function () {
    const row = $(this).data('row').replace(/lp_metabox_custom_fields_key/gi, Math.floor(Math.random() * 1000) + 1);
    $(this).closest('table').find('tbody').append(row);
    updateSort($(this).closest('.lp-metabox__custom-fields'));
    return false;
  });
  $('.lp-metabox__custom-fields').on('click', 'a.delete', function () {
    $(this).closest('tr').remove();
    updateSort($(this).closest('.lp-metabox__custom-fields'));
    return false;
  });
  $('.lp-metabox__custom-fields tbody').sortable({
    items: 'tr',
    cursor: 'move',
    axis: 'y',
    handle: 'td.sort',
    scrollSensitivity: 40,
    forcePlaceholderSize: true,
    helper: 'clone',
    opacity: 0.65,
    update(event, ui) {
      updateSort($(this).closest('.lp-metabox__custom-fields'));
    }
  });
  const updateSort = element => {
    const items = element.find('tbody tr');
    items.each(function (i, item) {
      $(this).find('.sort .count').val(i);
    });
  };
};
const lpMetaboxRepeaterField = () => {
  const updateSort = element => {
    const items = element.find('.lp_repeater_meta_box__field');
    items.each(function (i, item) {
      $(this).find('.lp_repeater_meta_box__field__count').val(i);
      $(this).find('.lp_repeater_meta_box__title__title > span').text(i + 1);
    });
  };
  $('.lp_repeater_meta_box__add').on('click', function () {
    const row = $(this).data('add').replace(/lp_metabox_repeater_key/gi, Math.floor(Math.random() * 1000) + 1);
    $(this).closest('.lp_repeater_meta_box__wrapper').find('.lp_repeater_meta_box__fields').append(row);
    updateSort($(this).closest('.lp_repeater_meta_box__wrapper'));
    $(this).closest('.lp_repeater_meta_box__wrapper').find('.lp_repeater_meta_box__fields').last().find('input').trigger('focus');
    return false;
  });
  $('.lp_repeater_meta_box__wrapper').on('click', 'a.lp_repeater_meta_box__title__delete', function () {
    $(this).closest('.lp_repeater_meta_box__field').remove();
    updateSort($(this).closest('.lp_repeater_meta_box__wrapper'));
    return false;
  });
  $('.lp_repeater_meta_box__fields').on('click', '.lp_repeater_meta_box__title__toggle, .lp_repeater_meta_box__title__title', function () {
    const field = $(this).closest('.lp_repeater_meta_box__field');
    if (field.hasClass('lp_repeater_meta_box__field_active')) {
      field.removeClass('lp_repeater_meta_box__field_active');
    } else {
      field.addClass('lp_repeater_meta_box__field_active');
    }
    return false;
  });
  $('.lp_repeater_meta_box__fields').sortable({
    items: '.lp_repeater_meta_box__field',
    cursor: 'grab',
    axis: 'y',
    handle: '.lp_repeater_meta_box__title__sort',
    scrollSensitivity: 40,
    forcePlaceholderSize: true,
    helper: 'clone',
    opacity: 0.65,
    update(event, ui) {
      updateSort($(this).closest('.lp_repeater_meta_box__wrapper'));
    }
  });
};
const lpMetaboxExtraInfo = () => {
  $('.lp_course_extra_meta_box__add').on('click', function () {
    $(this).closest('.lp_course_extra_meta_box__content').find('.lp_course_extra_meta_box__fields').append($(this).data('add'));
    $(this).closest('.lp_course_extra_meta_box__content').find('.lp_course_extra_meta_box__field').last().find('input').trigger('focus');
    return false;
  });

  /*document.querySelectorAll( '.lp_course_extra_meta_box__fields' ).forEach( ( ele ) => {
  	ele.addEventListener( 'keydown', ( e ) => {
  		const inputs = ele.querySelectorAll( '.lp_course_extra_meta_box__input' );
  			if ( e.keyCode === 13 ) {
  			e.preventDefault();
  			inputs.forEach( ( input ) => {
  				input.blur();
  			} );
  			return false;
  		}
  	} );
  } );*/

  $('.lp_course_extra_meta_box__fields').on('click', 'a.delete', function () {
    $(this).closest('.lp_course_extra_meta_box__field').remove();
    return false;
  });
  $('.lp_course_extra_meta_box__fields').sortable({
    items: '.lp_course_extra_meta_box__field',
    cursor: 'grab',
    axis: 'y',
    handle: '.sort',
    scrollSensitivity: 40,
    forcePlaceholderSize: true,
    helper: 'clone',
    opacity: 0.65
  });

  // FAQs metabox.
  $('.lp_course_faq_meta_box__add').on('click', function () {
    $(this).closest('.lp_course_faq_meta_box__content').find('.lp_course_faq_meta_box__fields').append($(this).data('add'));
    return false;
  });

  /*document.querySelectorAll( '.lp_course_faq_meta_box__fields' ).forEach( ( ele ) => {
  	ele.addEventListener( 'keydown', ( e ) => {
  		const inputs = ele.querySelectorAll( '.lp_course_faq_meta_box__field input' );
  		const textareas = ele.querySelectorAll( '.lp_course_faq_meta_box__field textarea' );
  			if ( e.keyCode === 13 ) {
  			e.preventDefault();
  			[ ...inputs, ...textareas ].forEach( ( input ) => {
  				input.blur();
  			} );
  			return false;
  		}
  	} );
  } );*/

  $('.lp_course_faq_meta_box__fields').on('click', 'a.delete', function () {
    $(this).closest('.lp_course_faq_meta_box__field').remove();
    return false;
  });
  $('.lp_course_faq_meta_box__fields').sortable({
    items: '.lp_course_faq_meta_box__field',
    cursor: 'grab',
    axis: 'y',
    handle: '.sort',
    scrollSensitivity: 40,
    forcePlaceholderSize: true,
    helper: 'clone',
    opacity: 0.65
  });
};

// Nhamdv.
const lpGetFinalQuiz = () => {
  const btns = document.querySelectorAll('.lp-metabox-get-final-quiz');
  [...btns].map(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const text = btn.textContent,
        loading = btn.dataset.loading,
        message = document.querySelector('.lp-metabox-evaluate-final_quiz');
      if (message) {
        message.remove();
      }
      btn.textContent = loading;
      getResponse(btn).then(data => {
        const {
          message,
          data: responseData
        } = data;
        btn.textContent = text;
        const newNode = document.createElement('div');
        newNode.className = 'lp-metabox-evaluate-final_quiz';
        newNode.innerHTML = responseData || message;
        btn.parentNode.insertBefore(newNode, btn.nextSibling);
      });
    });
  });
  const getResponse = async btn => {
    const response = await wp.apiFetch({
      path: 'lp/v1/admin/course/get_final_quiz',
      method: 'POST',
      data: {
        courseId: btn.dataset.postid || ''
      }
    });
    return response;
  };
};
const lpMetaboxColorPicker = () => {
  $('.lp-metabox__colorpick').iris({
    change(event, ui) {
      $(this).parent().find('.colorpickpreview').css({
        backgroundColor: ui.color.toString()
      });
    },
    hide: true,
    border: true
  }).on('click focus', function (event) {
    event.stopPropagation();
    $('.iris-picker').hide();
    $(this).closest('td').find('.iris-picker').show();
    $(this).data('original-value', $(this).val());
  }).on('change', function () {
    if ($(this).is('.iris-error')) {
      const originalValue = $(this).data('original-value');
      if (originalValue.match(/^\#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/)) {
        $(this).val($(this).data('original-value')).trigger('change');
      } else {
        $(this).val('').trigger('change');
      }
    }
  });
  $('body').on('click', function () {
    $('.iris-picker').hide();
  });
};
const lpMetaboxImage = () => {
  $('.lp-metabox-field__image').each((i, ele) => {
    let lpImageFrame;
    const addImage = $(ele).find('.lp-metabox-field__image--add');
    const delImage = $(ele).find('.lp-metabox-field__image--delete');
    const image = $(ele).find('.lp-metabox-field__image--image');
    const inputVal = $(ele).find('.lp-metabox-field__image--id');
    if (!inputVal.val()) {
      addImage.show();
      delImage.hide();
    } else {
      addImage.hide();
      delImage.show();
    }
    addImage.on('click', event => {
      event.preventDefault();
      if (lpImageFrame) {
        lpImageFrame.open();
        return;
      }
      lpImageFrame = wp.media({
        title: addImage.data('choose'),
        button: {
          text: addImage.data('update')
        },
        multiple: false
      });
      lpImageFrame.on('select', function () {
        const attachment = lpImageFrame.state().get('selection').first().toJSON();
        const attachmentImage = attachment.sizes && attachment.sizes.thumbnail ? attachment.sizes.thumbnail.url : attachment.url;
        image.append('<div class="lp-metabox-field__image--inner"><img src="' + attachmentImage + '" alt="" style="max-width:100%;"/></div>');
        inputVal.val(attachment.id);
        addImage.hide();
        delImage.show();
      });
      lpImageFrame.open();
    });
    delImage.on('click', event => {
      event.preventDefault();
      image.html('');
      addImage.show();
      delImage.hide();
      inputVal.val('');
    });
  });
};
const lpMetaboxImageAdvanced = () => {
  $('.lp-metabox-field__image-advanced').each((i, element) => {
    let lpImageFrame;
    const imageGalleryIds = $(element).find('#lp-gallery-images-ids');
    const listImages = $(element).find('.lp-metabox-field__image-advanced-images');
    const btnUpload = $(element).find('.lp-metabox-field__image-advanced-upload > a');
    $(btnUpload).on('click', event => {
      event.preventDefault();
      if (lpImageFrame) {
        lpImageFrame.open();
        return;
      }
      lpImageFrame = wp.media({
        title: btnUpload.data('choose'),
        button: {
          text: btnUpload.data('update')
        },
        states: [new wp.media.controller.Library({
          title: btnUpload.data('choose'),
          filterable: 'all',
          multiple: true
        })]
      });
      lpImageFrame.on('select', function () {
        const selection = lpImageFrame.state().get('selection');
        let attachmentIds = imageGalleryIds.val();
        selection.forEach(function (attachment) {
          attachment = attachment.toJSON();
          if (attachment.id) {
            attachmentIds = attachmentIds ? attachmentIds + ',' + attachment.id : attachment.id;
            const attachmentImage = attachment.sizes && attachment.sizes.thumbnail ? attachment.sizes.thumbnail.url : attachment.url;
            listImages.append('<li class="image" data-attachment_id="' + attachment.id + '"><img src="' + attachmentImage + '" /><ul class="actions"><li><a href="#" class="delete" title="' + btnUpload.data('delete') + '">' + btnUpload.data('text') + '</a></li></ul></li>');
          }
        });
        imageGalleryIds.val(attachmentIds);
      });
      lpImageFrame.open();
    });
    listImages.sortable({
      items: 'li.image',
      cursor: 'move',
      scrollSensitivity: 40,
      forcePlaceholderSize: true,
      forceHelperSize: false,
      helper: 'clone',
      opacity: 0.65,
      placeholder: 'lp-metabox-sortable-placeholder',
      start(event, ui) {
        ui.item.css('background-color', '#f6f6f6');
      },
      stop(event, ui) {
        ui.item.removeAttr('style');
      },
      update() {
        let attachmentIds = '';
        listImages.find('li.image').css('cursor', 'default').each(function () {
          const attachmentId = $(this).attr('data-attachment_id');
          attachmentIds = attachmentIds + attachmentId + ',';
        });
        imageGalleryIds.val(attachmentIds);
      }
    });
    $(listImages).find('li.image').each((i, ele) => {
      const del = $(ele).find('a.delete');
      del.on('click', () => {
        $(ele).remove();
        let attachmentIds = '';
        $(listImages).find('li.image').css('cursor', 'default').each(function () {
          const attachmentId = $(this).attr('data-attachment_id');
          attachmentIds = attachmentIds + attachmentId + ',';
        });
        imageGalleryIds.val(attachmentIds);
        return false;
      });
    });
  });
};
const lpMetaboxCourseTabs = () => {
  $(document.body).on('lp-metabox-course-tab-panels', function () {
    $('ul.lp-meta-box__course-tab__tabs').show();
    $('ul.lp-meta-box__course-tab__tabs a').on('click', function (e) {
      e.preventDefault();
      const panelWrap = $(this).closest('div.lp-meta-box__course-tab');
      $('ul.lp-meta-box__course-tab__tabs li', panelWrap).removeClass('active');
      $(this).parent().addClass('active');
      $('div.lp-meta-box-course-panels', panelWrap).hide();
      $($(this).attr('href')).show();
    });
    $('div.lp-meta-box__course-tab').each(function () {
      $(this).find('ul.lp-meta-box__course-tab__tabs li').eq(0).find('a').trigger('click');
    });
  }).trigger('lp-metabox-course-tab-panels');
};

// use to show and hide field condition logic metabox.
/*const lpMetaboxCondition = () => {
	const fields = document.querySelectorAll( '.lp-meta-box .form-field' );

	fields.forEach( ( field ) => {
		if ( field.hasAttribute( 'data-show' ) && field.dataset.show ) {
			lpMetaboxConditionType( field, field.dataset.show, 'show' );
		} else if ( field.hasAttribute( 'data-hide' ) && field.dataset.hide ) {
			lpMetaboxConditionType( field, field.dataset.hide, 'hide' );
		}
	} );
};*/

/*const lpMetaboxConditionType = ( field, conditions, typeCondition = 'show' ) => {
	const condition = JSON.parse( conditions ),
		eles = document.querySelectorAll( `input[id^="${ condition[ 0 ] }"]` ),
		logic = condition[ 1 ] === '=' ? '=' : '!=',
		dataLogic = condition[ 2 ];

	const switchCase = ( type, ele, target ) => {
		switch ( type ) {
		case 'checkbox':
			let val = dataLogic;

			if ( dataLogic === 'yes' || dataLogic === '1' || dataLogic === 1 || dataLogic === 'true' ) {
				val = true;
			} else if ( dataLogic === 'no' || dataLogic === '0' || dataLogic === 0 || dataLogic === 'false' ) {
				val = false;
			}

			if ( logic == '!=' && val !== Boolean( target ? target.checked : ele.checked ) ) {
				field.style.display = typeCondition === 'show' ? '' : 'none';
			} else if ( logic == '=' && val == Boolean( target ? target.checked : ele.checked ) ) {
				field.style.display = typeCondition === 'show' ? '' : 'none';
			} else {
				field.style.display = typeCondition === 'show' ? 'none' : '';
			}
			break;
		}
	};

	eles.forEach( ( ele ) => {
		const type = ele.getAttribute( 'type' );

		switchCase( type, ele );

		ele.addEventListener( 'change', ( e ) => {
			const target = e.target;

			switchCase( type, ele, target );
		} );
	} );
};*/

/** End Nhamdv code */

const initTooltips = function initTooltips() {
  $('.learn-press-tooltip').each(function () {
    const $el = $(this),
      args = $.extend({
        title: 'data-tooltip',
        offset: 10,
        gravity: 's'
      }, $el.data());
    $el.tipsy(args);
  });
};
const initSelect2 = function initSelect2() {
  if ($.fn.select2) {
    const elSelect2 = $('.lp-select-2 select');
    elSelect2.select2({
      placeholder: 'Select a value'
    });
    elSelect2.on('change.select2', function (e) {
      const el = $(e.target);
      const val = el.val();
      if (!val.length) {
        el.val(null);
      }
    });
    $('.lp_autocomplete_metabox_field').each(function () {
      const dataAtts = $(this).data('atts');
      let action = dataAtts.action;
      if (!action) {
        switch (dataAtts.data) {
          case 'users':
            action = dataAtts.rest_url + 'wp/v2/users';
            break;
          default:
            action = dataAtts.rest_url + 'wp/v2/' + dataAtts.data;
            break;
        }
      }
      $(this).find('select').select2({
        placeholder: dataAtts.placeholder ? dataAtts.placeholder : 'Select',
        ajax: {
          url: action,
          dataType: 'json',
          delay: 250,
          beforeSend(xhr) {
            xhr.setRequestHeader('X-WP-Nonce', dataAtts.nonce);
          },
          data(params) {
            return {
              search: params.term
            };
          },
          processResults(data) {
            return {
              results: data.map(item => {
                return {
                  id: item.id,
                  text: item.title && item.title.rendered ? item.title.rendered : item.name
                };
              })
            };
          },
          cache: true
        },
        minimumInputLength: 2
      });
    });
  }
};
const initSingleCoursePermalink = function initSingleCoursePermalink() {
  $doc.on('change', '.learn-press-single-course-permalink input[type="radio"]', function () {
    const $check = $(this),
      $row = $check.closest('.learn-press-single-course-permalink');
    if ($row.hasClass('custom-base')) {
      $row.find('input[type="text"]').prop('readonly', false);
    } else {
      $row.siblings('.custom-base').find('input[type="text"]').prop('readonly', true);
    }
  }).on('change', 'input.learn-press-course-base', function () {
    $('#course_permalink_structure').val($(this).val());
  }).on('focus', '#course_permalink_structure', function () {
    $('#learn_press_custom_permalink').click();
  }).on('change', '#learn_press_courses_page_id', function () {
    $('tr.learn-press-courses-page-id').toggleClass('hide-if-js', !parseInt(this.value));
  });
};
const togglePaymentStatus = function togglePaymentStatus(e) {
  e.preventDefault();
  const $row = $(this).closest('tr'),
    $button = $(this),
    status = $row.find('.status').hasClass('enabled') ? 'no' : 'yes';
  $.ajax({
    url: '',
    data: {
      'lp-ajax': 'update-payment-status',
      status,
      id: $row.data('payment'),
      nonce: $('input[name=lp-settings-nonce]').val()
    },
    success(response) {
      response = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.lpAjaxParseJsonOld)(response);
      for (const i in response) {
        $('#payment-' + i + ' .status').toggleClass('enabled', response[i]);
      }
    }
  });
};
const updateEmailStatus = function updateEmailStatus() {
  (function () {
    $.post({
      url: window.location.href,
      data: {
        'lp-ajax': 'update_email_status',
        status: $(this).parent().hasClass('enabled') ? 'no' : 'yes',
        id: $(this).data('id'),
        nonce: $('input[name=lp-settings-nonce]').val()
      },
      dataType: 'text',
      success: $.proxy(function (res) {
        res = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.lpAjaxParseJsonOld)(res);
        for (const i in res) {
          $('#email-' + i + ' .status').toggleClass('enabled', res[i]);
        }
      }, this)
    });
  }).apply(this);
};
const lpMetaboxsalePriceDate = () => {
  // Don't run in LearnPress Frontend Editor Add-on.
  if (!$('#course-settings').length) {
    return;
  }
  $('.lp_sale_dates_fields').each(function () {
    const wrap = $(this).closest('#price_course_data');
    let saleScheduleSet = false;
    $(this).find('input').each(function () {
      if ('' !== $(this).val()) {
        saleScheduleSet = true;
      }
    });
    if (saleScheduleSet) {
      wrap.find('.lp_sale_price_schedule').hide();
      wrap.find('.lp_sale_dates_fields').show();
    } else {
      wrap.find('.lp_sale_price_schedule').show();
      wrap.find('.lp_sale_dates_fields').hide();
    }
  });
  $('.lp-meta-box-course-panels').on('click', '.lp_sale_price_schedule', function () {
    const wrap = $(this).closest('#price_course_data');
    $(this).hide();
    wrap.find('.lp_cancel_sale_schedule').show();
    wrap.find('.lp_sale_dates_fields').show();
    return false;
  });
  $('.lp-meta-box-course-panels').on('click', '.lp_cancel_sale_schedule', function () {
    const wrap = $(this).closest('div.lp-meta-box-course-panels');
    $(this).hide();
    wrap.find('.lp_sale_price_schedule').show();
    wrap.find('.lp_sale_dates_fields').hide();
    wrap.find('.lp_sale_dates_fields').find('input').val('');
    return false;
  });
  $(document).on('input', '#price_course_data', function (e) {
    const $this = $(this),
      regularPrice = $('.lp_meta_box_regular_price'),
      salePrice = $('.lp_meta_box_sale_price'),
      $target = $(e.target).attr('id');
    $this.find('.learn-press-tip-floating').remove();
    if (parseInt(salePrice.val()) > parseInt(regularPrice.val())) {
      if ($target === '_lp_price') {
        regularPrice.parent('.form-field').append('<div class="learn-press-tip-floating">' + lpAdminCourseEditorSettings.i18n.notice_price + '</div>');
      } else if ($target === '_lp_sale_price') {
        salePrice.parent('.form-field').append('<div class="learn-press-tip-floating">' + lpAdminCourseEditorSettings.i18n.notice_sale_price + '</div>');
      }
    }
  });

  /*const datePickerSelect = function( datepicker ) {
  	const option = $( datepicker ).is( '#_lp_sale_start' ) ? 'minDate' : 'maxDate',
  		otherDateField = 'minDate' === option ? $( '#_lp_sale_end' ) : $( '#_lp_sale_start' ),
  		date = $( datepicker ).datetimepicker( 'getDate' );
  		$( otherDateField ).datetimepicker( 'option', option, date );
  	$( datepicker ).trigger( 'change' );
  };
  	$( '.lp_sale_dates_fields' ).each( function() {
  	$( this ).find( 'input' ).datetimepicker( {
  		timeFormat: 'HH:mm',
  		separator: ' ',
  		dateFormat: 'yy-mm-dd',
  		showButtonPanel: true,
  		onSelect() {
  			datePickerSelect( $( this ) );
  		},
  	} );
  		$( this ).find( 'input' ).each( function() {
  		datePickerSelect( $( this ) );
  	} );
  } );*/
};
const lpHidePassingGrade = () => {
  const listHides = ['evaluate_final_quiz', 'evaluate_final_assignment'];
  const inputLists = document.querySelectorAll('input[type=radio][name=_lp_course_result]');
  [...inputLists].map((ele, i) => {
    if (ele.checked && listHides.includes(ele.value)) {
      $('._lp_passing_condition_field').hide();
    }
    return null;
  });
  $('input[type=radio][name=_lp_course_result]').on('change', function (e) {
    if (listHides.includes(e.target.value)) {
      $('._lp_passing_condition_field').hide();
    } else {
      $('._lp_passing_condition_field').show();
    }
  });
};
const callbackFilterTemplates = function callbackFilterTemplates() {
  const $link = $(this);
  if ($link.hasClass('current')) {
    return false;
  }
  const $templatesList = $('#learn-press-template-files'),
    $templates = $templatesList.find('tr[data-template]'),
    template = $link.data('template'),
    filter = $link.data('filter');
  $link.addClass('current').siblings('a').removeClass('current');
  if (!template) {
    if (!filter) {
      $templates.removeClass('hide-if-js');
    } else {
      $templates.map(function () {
        $(this).toggleClass('hide-if-js', $(this).data('filter-' + filter) !== 'yes');
      });
    }
  } else {
    $templates.map(function () {
      $(this).toggleClass('hide-if-js', $(this).data('template') !== template);
    });
  }
  $('#learn-press-no-templates').toggleClass('hide-if-js', !!$templatesList.find('tr.template-row:not(.hide-if-js):first').length);
  return false;
};
const toggleEmails = function toggleEmails(e) {
  e.preventDefault();
  const $button = $(this),
    status = $button.data('status');
  $.ajax({
    url: '',
    data: {
      'lp-ajax': 'update_email_status',
      nonce: $('input[name=lp-settings-nonce]').val(),
      status
    },
    success(response) {
      response = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.lpAjaxParseJsonOld)(response);
      for (const i in response) {
        $('#email-' + i + ' .status').toggleClass('enabled', response[i]);
      }
    }
  });
};
const onReady = function onReady() {
  makePaymentsSortable();
  initSelect2();
  initTooltips();
  initSingleCoursePermalink();

  // lp Metabox in LP4.
  lpMetaboxCourseTabs();
  lpMetaboxCustomFields();
  lpMetaboxColorPicker();
  lpMetaboxImageAdvanced();
  lpMetaboxImage();
  lpMetaboxsalePriceDate();
  lpMetaboxExtraInfo();
  lpHidePassingGrade();
  lpGetFinalQuiz();
  //lpMetaboxCondition();
  lpMetaboxRepeaterField();
  $(document).on('click', '.learn-press-payments .status .dashicons', togglePaymentStatus).on('click', '.change-email-status', updateEmailStatus).on('click', '.learn-press-filter-template', callbackFilterTemplates).on('click', '#learn-press-enable-emails, #learn-press-disable-emails', toggleEmails);
};
$(document).ready(onReady);

// Events
document.addEventListener('keydown', function (e) {
  const target = e.target;
  if (e.key === 'Enter' || e.keyCode === 13) {
    // When enter on input on Extra information Options, blur it.
    if (target.classList.contains('lp_course_extra_meta_box__input')) {
      e.preventDefault();
      target.blur();
    } else if (target.tagName === 'INPUT') {
      if (target.closest('.lp_course_faq_meta_box__field')) {
        e.preventDefault();
        target.blur();
      }
    }
  }
});
/******/ })()
;
//# sourceMappingURL=learnpress.js.map