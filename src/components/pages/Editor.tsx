import React from 'react';
import { items, ItemType } from '@/utils/data';
import useColor from '@/hooks/useColor';

type EditorProps = {
  activeStep: ItemType;
  setActiveStep: (item: ItemType) => void;
};

function Editor({ activeStep, setActiveStep }: EditorProps) {
  const { colors } = useColor();
  return (
    <div
      style={{
        border: '2px solid white',
        margin: '10px',
        minWidth: '300px',
        width: '50%',
        minHeight: '400px',
        backgroundColor: colors.dark,
        borderRadius: '5px',
      }}
    >
      <div>
        {items.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveStep(item)}
            style={{
              padding: '5px 10px',
              borderRadius: '5px 5px 0 0',
              border: `1px solid ${colors.dark}`,
              backgroundColor:
                activeStep.name === item.name ? colors.dark : colors.secondary,
              boxShadow:
                activeStep.name === item.name
                  ? 'none'
                  : 'inset 0 -4px 4px rgba(0,0,0,0.3)',
              color:
                activeStep.name === item.name
                  ? 'white'
                  : 'rgba(255,255,255,0.7)',
              transition: 'all 0.3s',
              fontSize: '18px',
            }}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div
        style={{
          padding: '16px 0',
        }}
      >
        {activeStep.code?.map((line, index) => (
          <div
            key={`${line}-${index}`}
            style={{
              fontFamily: 'roboto',
              display: 'flex',
              marginBottom: '3px',
            }}
          >
            <p
              style={{
                textAlign: 'end',
                width: '24px',
                margin: '0 16px',
                opacity: '0.4',
                fontSize: '24px',
              }}
            >
              {index + 1}
            </p>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '24px',
              }}
            >
              {line}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Editor;
