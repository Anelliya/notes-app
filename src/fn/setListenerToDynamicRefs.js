import memoizeByQuerySelector from './memoizeByQuerySelector';
import setEventListener from './setEventListener';
import handleListUpdate from './handleListUpdate';
import setFormValue from './setFormValue';
import handleAction from './handleAction';

const resetData = {
  id: null,
  name: null,
  created: null,
  category: 'Task',
  content: null,
  dates: null,
  status: 'active',
};

let newNoteData = { ...resetData };

const dynamicRefs = [];

export default function setListenerToDynamicRefs(refs) {
  const refsNames = [
    [
      '#save-btn',
      'click',
      handleListUpdate,
      [dynamicRefs, refs, 'active', newNoteData, resetData],
    ],
    ['.name', 'input', setFormValue, [newNoteData, dynamicRefs]],
    ['#content', 'input', setFormValue, [newNoteData, dynamicRefs]],
    ['#category', 'change', setFormValue, [newNoteData, dynamicRefs]],
    [
      '#list-of-active-notes',
      'click',
      handleAction,
      [refs, 'active', newNoteData],
    ],
    [
      '#list-of-archived-notes',
      'click',
      handleAction,
      [refs, 'archived', newNoteData],
    ],
    ['#editName', 'input', setFormValue, [newNoteData, dynamicRefs]],
    ['#changeContent', 'input', setFormValue, [newNoteData, dynamicRefs]],
    ['#changeCategory', 'change', setFormValue, [newNoteData, dynamicRefs]],
    [
      '#save-edit-btn',
      'click',
      handleListUpdate,
      [dynamicRefs, refs, 'active', newNoteData, resetData],
    ],
  ];

  function setListeners(names) {
    names.forEach(([selector, event, handler, arg]) => {
      const element = memoizeByQuerySelector([selector])();

      dynamicRefs.push({
        [selector]: element,
      });
      setEventListener(element, event, e => handler(e, ...arg));
    });
  }

  setListeners(refsNames);
}
