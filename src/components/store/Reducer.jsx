import produce from 'immer';
import { findFirst, findAndDeleteFirst } from 'obj-traverse/lib/obj-traverse';
import uid from 'uuid';

import { initGroup, initRule } from '../../schema';

export default (state, action) =>
  produce(state, draft => {
    switch (action.type) {
      case 'addRule':
        const {
          data: { target: ruleTarget },
        } = action.payload;
        const ruleRoot = findFirst(draft, 'rules', { id: ruleTarget });
        ruleRoot.rules.push({ ...initRule, id: uid() });
        return draft;
      case 'addGroup':
        const {
          data: { target: groupTarget },
        } = action.payload;
        const groupRoot = findFirst(draft, 'rules', { id: groupTarget });
        groupRoot.rules.push({ ...initGroup, id: uid() });
        return draft;
      case 'removeRule':
      case 'removeGroup':
        const {
          data: { target: rRuleTarget },
        } = action.payload;
        findAndDeleteFirst(draft, 'rules', { id: rRuleTarget });
        return draft;
      case 'combinatorChange':
        const {
          data: {
            target: combineTarget,
            value: { combinator, isNot },
          },
        } = action.payload;
        const combineRoot = findFirst(draft, 'rules', { id: combineTarget });
        combineRoot.combinator = combinator;
        combineRoot.isNot = isNot;
        return draft;
      case 'ruleChange':
        const {
          data: { target: mRuleTarget, value, type },
        } = action.payload;
        const mRuleRoot = findFirst(draft, 'rules', { id: mRuleTarget });
        mRuleRoot[type] = value;
        return draft;
      default:
        return state;
    }
  });
