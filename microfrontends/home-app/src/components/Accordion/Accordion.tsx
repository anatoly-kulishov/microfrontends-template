import React, { FC, useState } from 'react';
import classNames from 'classnames';

import styles from './Accordion.module.scss';
import { contains } from '../../utils/common-helper';

type AccordionPropsType = {
  data: {
    id: number | string;
    title: string;
    description: string;
  }[];
  maxWidth?: string;
};

export const Accordion: FC<AccordionPropsType> = ({ data, maxWidth = '100%' }) => {
  const [activeItem, setActiveItem] = useState<number[] | []>([]);

  console.log(activeItem);

  const toggleAccordionItem = (index: number) => () => {
    console.log(contains(activeItem, index));
    if (contains(activeItem, index)) {
      setActiveItem(prev => [...prev, index]);
    }
  };

  return (
    <div className={classNames('accordion', styles.AccordionWrapper)} id="accordionExample" style={{ maxWidth }}>
      {data.map((item, index) => (
        <div className="accordion-item" key={item.id}>
          <h2 className="accordion-header collapsed">
            <button className="accordion-button" type="button" onClick={toggleAccordionItem(index)}>
              {item.title}
            </button>
          </h2>
          <div
            className={classNames('accordion-collapse collapse', {
              show: activeItem.find(el => {
                console.log(el === index);
                return el === index;
              }),
            })}
          >
            <div className="accordion-body">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
