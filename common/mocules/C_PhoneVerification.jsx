'use client';

import React from 'react';
import { useState, useEffect, useRef } from 'react';
import s from '@/styles/C_PhoneVerification.module.scss';

export default function C_PhoneVerification({ onVerified, onPhoneChange }) {
  const [data, setData] = useState({
    name: '',
    birthdate: '',
    phone: '',
    carrier: '',
    code: '',
  });
  const [ui, setUi] = useState({
    dropdown: false,
    sent: false,
    error: '',
    timer: 180,
    verified: false,
  });

  const carriers = ['SKT', 'KT', 'LG U+', 'SKT 알뜰폰', 'KT 알뜰폰', 'LG U+ 알뜰폰'];
  const timerRef = useRef();
  const dropdownRef = useRef();

  // 드롭다운 외부 클릭 감지
  useEffect(() => {
    const clickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setUi({ ...ui, dropdown: false });
      }
    };
    document.addEventListener('mousedown', clickOutside);
    return () => document.removeEventListener('mousedown', clickOutside);
  }, [ui]);

  // 인증번호 전송
  const sendCode = () => {
    if (ui.verified) return;

    setUi({ ...ui, sent: true, error: '', timer: 180 });

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setUi(prev => {
        if (prev.timer <= 1) {
          clearInterval(timerRef.current);
          return { ...prev, timer: 0 };
        }
        return { ...prev, timer: prev.timer - 1 };
      });
    }, 1000);
  };

  // 인증번호 확인
  const verifyCode = () => {
    if (ui.verified) return;

    if (data.code === '1234') {
      // 인증 성공
      setUi({
        ...ui,
        error: '',
        verified: true,
        successMessage: '인증이 완료되었습니다',
      });

      // 부모 컴포넌트에 인증 완료 알림
      if (onVerified) {
        onVerified(data.phone);
      }

      // 타이머 중지
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    } else {
      setUi({ ...ui, error: '인증번호가 맞지 않습니다.' });
    }
  };

  // 타이머 표시 형식
  const formatTime = time => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  // 타이머 정리
  useEffect(
    () => () => {
      if (timerRef.current) clearInterval(timerRef.current);
    },
    []
  );

  // 전화번호 입력 변경 시 부모에 알림
  const handlePhoneChange = e => {
    const newPhone = e.target.value;
    setData({ ...data, phone: newPhone });
    if (onPhoneChange) {
      onPhoneChange(newPhone);
    }
  };

  return (
    <div className={s.container}>
      {/* 이름 */}
      <div className={s.inputContainer}>
        <input
          className={s.input}
          placeholder="이름"
          value={data.name}
          onChange={e => setData({ ...data, name: e.target.value })}
        />
      </div>

      {/* 생년월일 */}
      <div className={s.inputContainer}>
        <input
          className={s.input}
          placeholder="생년월일 (YYYY/MM/DD)"
          value={data.birthdate}
          onChange={e => setData({ ...data, birthdate: e.target.value })}
        />
      </div>

      {/* 통신사 */}
      <div className={s.inputContainer} ref={dropdownRef}>
        <div className={s.dropdown} onClick={() => setUi({ ...ui, dropdown: !ui.dropdown })}>
          {data.carrier || '통신사 선택'}
          <span>
            <img src="/arrow.svg" />
          </span>
        </div>

        {ui.dropdown && (
          <div className={s.optionList}>
            {carriers.map((item, idx) => (
              <div
                key={idx}
                className={`${s.option} ${data.carrier === item ? s.active : ''}`}
                onClick={() => {
                  setData({ ...data, carrier: item });
                  setUi({ ...ui, dropdown: false });
                }}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 전화번호 */}
      <div className={s.row}>
        <div className={s.inputContainer} style={{ flex: 1, margin: 0 }}>
          <input
            className={s.input}
            placeholder="전화번호 입력"
            value={data.phone}
            onChange={handlePhoneChange}
            disabled={ui.sent}
          />
        </div>
        <button className={s.primaryButton} onClick={sendCode} disabled={ui.verified}>
          인증번호 전송
        </button>
      </div>

      {/* 인증번호 */}
      {ui.sent && (
        <>
          <div className={s.row}>
            <div className={s.inputContainer} style={{ flex: 1, margin: 0 }}>
              <input
                className={`${s.input} ${ui.error ? s.error : ''} ${ui.verified ? s.success : ''} ${!ui.verified ? s.hasRight : ''}`}
                placeholder="인증번호 4자리 입력"
                value={ui.verified ? '인증성공!' : data.code}
                onChange={e => !ui.verified && setData({ ...data, code: e.target.value })}
                disabled={ui.verified}
              />
              {!ui.verified && <div className={s.rightElement}>{formatTime(ui.timer)}</div>}
            </div>
            <button className={s.secondaryButton} onClick={verifyCode} disabled={ui.verified}>
              확인
            </button>
          </div>

          <div className={s.helpText}>
            {!ui.verified ? (
              // 인증 전 상태
              <>
                인증번호가 오지 않나요?
                {ui.timer === 0 && (
                  <button className={s.resendButton} onClick={sendCode}>
                    인증번호 재전송
                  </button>
                )}
                {ui.error && <div className={s.errorText}>{ui.error}</div>}
              </>
            ) : (
              // 인증 성공 상태
              <div className={s.successText}>{ui.successMessage}</div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

import PropTypes from 'prop-types';

C_PhoneVerification.propTypes = {
  onVerified: PropTypes.func.isRequired,
  onPhoneChange: PropTypes.func,
};
