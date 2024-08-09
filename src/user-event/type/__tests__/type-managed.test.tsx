import * as React from 'react';
import { TextInput } from 'react-native';
import { createEventLogger, getEventsNames } from '../../../test-utils';
import { render, screen } from '../../..';
import { userEvent } from '../..';

beforeEach(() => {
  jest.useRealTimers();
});

interface ManagedTextInputProps {
  valueTransformer?: (text: string) => string;
  logEvent: (name: string) => (event: any) => void;
  initialValue?: string;
}

function ManagedTextInput({
  logEvent,
  valueTransformer,
  initialValue = '',
}: ManagedTextInputProps) {
  const [value, setValue] = React.useState(initialValue);

  const handleChangeText = (text: string) => {
    logEvent('changeText')(text);
    const newValue = valueTransformer?.(text) ?? text;
    setValue(newValue);
  };

  return (
    <TextInput
      testID="input"
      value={value}
      onChangeText={handleChangeText}
      onFocus={logEvent('focus')}
      onBlur={logEvent('blur')}
      onPressIn={logEvent('pressIn')}
      onPressOut={logEvent('pressOut')}
      onChange={logEvent('change')}
      onKeyPress={logEvent('keyPress')}
      onTextInput={logEvent('textInput')}
      onSelectionChange={logEvent('selectionChange')}
      onSubmitEditing={logEvent('submitEditing')}
      onEndEditing={logEvent('endEditing')}
      onContentSizeChange={logEvent('contentSizeChange')}
    />
  );
}

describe('type() for managed TextInput', () => {
  it('supports basic case', async () => {
    jest.spyOn(Date, 'now').mockImplementation(() => 100100100100);
    const { events, logEvent } = createEventLogger();
    render(<ManagedTextInput logEvent={logEvent} />);

    const user = userEvent.setup();
    await user.type(screen.getByTestId('input'), 'Wow');

    expect(getEventsNames(events)).toEqual([
      'pressIn',
      'focus',
      'pressOut',
      'keyPress',
      'change',
      'changeText',
      'selectionChange',
      'keyPress',
      'change',
      'changeText',
      'selectionChange',
      'keyPress',
      'change',
      'changeText',
      'selectionChange',
      'endEditing',
      'blur',
    ]);

    expect(events).toMatchSnapshot('input: "Wow"');
  });

  test('supports rejecting TextInput', async () => {
    jest.spyOn(Date, 'now').mockImplementation(() => 100100100100);
    const { events, logEvent } = createEventLogger();
    render(
      <ManagedTextInput initialValue="XXX" logEvent={logEvent} valueTransformer={() => 'XXX'} />,
    );

    const user = userEvent.setup();
    await user.type(screen.getByTestId('input'), 'ABC');

    expect(getEventsNames(events)).toEqual([
      'pressIn',
      'focus',
      'pressOut',
      'keyPress',
      'change',
      'changeText',
      'selectionChange',
      'keyPress',
      'change',
      'changeText',
      'selectionChange',
      'keyPress',
      'change',
      'changeText',
      'selectionChange',
      'endEditing',
      'blur',
    ]);

    expect(events).toMatchSnapshot('input: "ABC", value: "XXX"');
  });
});
