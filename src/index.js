import './index.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/icons/sprite.svg';

import setToLocalStorage from './fn/setToLocalStorage';
import layoutMarkup from './fn/layoutMarkup';
import memoizeByQuerySelector from './fn/memoizeByQuerySelector';
import setListenerToDynamicRefs from './fn/setListenerToDynamicRefs';

import archiveTemplate from './template/archiveTemplate.hbs';
import editModal from './template/editModal.hbs';
import summaryTemplate from './template/summary.hbs';
import mainTemplate from './template/main.hbs';
import notesTemplate from './template/noteItem.hbs';

import notes from './notes.json';

const refs = {
  body: document.querySelector('#body'),
  notes: memoizeByQuerySelector('#list-of-active-notes'),
  archived: memoizeByQuerySelector('#list-of-archived-notes'),
  summary: memoizeByQuerySelector('#list-of-summary-notes'),
};

setToLocalStorage('notes', notes);
layoutMarkup(refs.body, 'active', mainTemplate);
layoutMarkup(refs.notes(), 'active', notesTemplate);
layoutMarkup(refs.summary(), null, summaryTemplate);
layoutMarkup(refs.archived(), 'archived', archiveTemplate);
layoutMarkup(refs.body, null, editModal);
setListenerToDynamicRefs(refs);
