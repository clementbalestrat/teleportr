import { useState } from 'react';
import styled from 'styled-components';

const GradientButtonWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background: linear-gradient(90deg, #170557 0%, #4489CE 0%, #944BA9 100%, #00D1FF 100%);
  border-radius: ${({ isOpen }) => isOpen ? '16px 16px 0 0' : '16px'};
`;

const GradientButton = styled.button<{ isOpen: boolean }>`
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  cursor: pointer;
  background-color: #060134;
  color: #FFFFFF;
  border: none;
  border-radius: ${({ isOpen }) => isOpen ? '12px 12px 0 0' : '12px'};
  font-size: 17px;
  text-transform: uppercase;
  font-family: "GT America CM";
  letter-spacing: 0.46px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;

  .sc {
    color: #00D0FE;
    text-transform: uppercase;
    font-size: 17px;
    font-family: "GT America Condensed Bold";
    letter-spacing: 0.41px;
    margin-top: 0;
    margin-bottom: 4px;
  }

  p {
    font-size: 17px;
    letter-spacing: 0.46px;
    color: #FFFFFF;
    text-transform: uppercase;
    margin: 0;
  }
`;

const currencies = [
  {
    key: 'sUSD',
    name: 'Synthetic US Dollars'
  },
  {
    key: 'sSNX',
    name: 'Synthetix Token'
  },
  {
    key: 'sEuro',
    name: 'Synthetic Euro'
  }
]

const CurrencySelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GradientButtonWrapper isOpen={isOpen}>
        <GradientButton onClick={handleToggle} isOpen={isOpen}>
          {/* eslint-disable-next-line */}
          <img src='/img/control-panel-arrow.svg' alt='Conrol Panel Arrow' />
          <div>
            <p className='sc'>Select currency</p>
            <p>Ethereum ($eth)</p>
          </div>
          {/* eslint-disable-next-line */}
          <img src='/img/sUSD-symbol.svg' alt='sUSD Symbol' />
        </GradientButton>
      </GradientButtonWrapper>
      {isOpen && (
        <CurrencyListWrapper>
          <CurrencyList>
            <CurrencySearchBox
              placeholder='Search Synths'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </CurrencyList>
        </CurrencyListWrapper>
      )}
    </>
  );
};

const CurrencyListWrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: 56px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0 0 16px 16px;
  background: linear-gradient(90deg, #170557 0%, #4489CE 0%, #944BA9 100%, #00D1FF 100%);
  width: 316px;
  height: 208px;
`;

const CurrencyList = styled.div`
  border-radius: 0 0 12px 12px;
  width: calc(100% - 8px);
  height: 200px;
  background-color: #060134;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CurrencySearchBox = styled.input`
  width: 100%;
  margin: 4px;
  background-color: #1C1541;
  padding: 8px;
  border: none;
  font-family: "GT America CM";
  border-radius: 7px;
  font-size: 15px;
  color: #FFFFFF;

  &:focus {
    outline: none;
  }
`;

export default CurrencySelect;