import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import logoSmall from 'src/assets/logoSmall.png';
import { LogoWrapper, StepWrapper } from 'src/components/figma/';
import TitleWithAddon from 'src/components/TitleWithAddon/TitleWithAddon';
import styled from 'styled-components';

const EmailSignIn: React.FC<EmailSignInProps> = ({
  submitHandler,
  goToSignUp,
  goBack,
}): React.ReactElement<EmailSignInProps> => {
  const { t } = useTranslation();

  return (
    <StepWrapper>
      <LogoWrapper>
        <img src={logoSmall} alt="logo" height="50px" width="50px" />
      </LogoWrapper>
      <TitleWrapper>
        <TitleWithAddon level={2} alignAddon="50%">
          {t('login.sign_in.title')}
        </TitleWithAddon>
      </TitleWrapper>
      <Form
        layout="vertical"
        name="emailSignin"
        initialValues={{ remember: true }}
        onFinish={({ email, password }) => submitHandler(email, password)}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: t('login.steps.3_email_signin.email_error_message'),
            },
          ]}
          label={t('login.steps.3_email_signin.email_label')}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: t('login.sign_in.password_error_message'),
            },
          ]}
          label={t('login.sign_in.password_label')}
        >
          <Input.Password />
        </Form.Item>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <TextLink>Forgot password</TextLink> */}
          <TextLink onClick={() => goToSignUp()}>
            New user? Sign up instead
          </TextLink>
        </div>

        <Form.Item>
          <RegistrationButtonsPanel>
            <RegistrationButtonWrapper>
              <Button onClick={() => goBack()}> X {t('cancel')} </Button>
            </RegistrationButtonWrapper>
            <RegistrationButtonWrapper>
              <Button
                type="primary"
                htmlType="submit"
                icon={<ArrowRightOutlined />}
              >
                {t('login.steps.3_email_signin.signin')}{' '}
              </Button>
            </RegistrationButtonWrapper>
          </RegistrationButtonsPanel>
        </Form.Item>
      </Form>
    </StepWrapper>
  );
};

const RegistrationButtonsPanel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  margin-top: 10px;
`;

const RegistrationButtonWrapper = styled.div`
  padding: 5px;
  flex: 1 1 auto;
`;

const TextLink = styled.span`
  color: #1890ff;
  cursor: pointer;
`;

const TitleWrapper = styled.div`
  margin: 20px 0 30px;
`;
interface EmailSignInProps {
  submitHandler: Function;
  goToSignUp: Function;
  goBack: Function;
}

export default EmailSignIn;