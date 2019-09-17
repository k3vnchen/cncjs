import React, { useContext } from 'react';
import i18n from 'app/lib/i18n';
import CollapsibleCard from 'app/components/CollapsibleCard';
import { Container, Row, Col } from 'app/components/GridSystem';
import HorizontalForm from 'app/components/HorizontalForm';
import { WidgetConfigContext } from 'app/widgets/context';
import OverflowEllipsis from './OverflowEllipsis';
import Readout from './Readout';

const StatusReports = ({
    activeState,
    feedrate,
    spindle,
    tool,
}) => {
    const config = useContext(WidgetConfigContext);
    const expanded = config.get('panel.statusReports.expanded');
    const collapsed = !expanded;

    return (
        <CollapsibleCard
            easing="ease-out"
            collapsed={collapsed}
        >
            {({ collapsed, ToggleIcon, Header, Body }) => {
                const expanded = !collapsed;
                config.set('panel.statusReports.expanded', expanded);

                return (
                    <Container fluid style={{ width: '100%' }}>
                        <Header>
                            {({ hovered }) => (
                                <Row>
                                    <Col>{i18n._('Status Reports')}</Col>
                                    <Col width="auto">
                                        <ToggleIcon style={{ opacity: hovered ? 1 : 0.5 }} />
                                    </Col>
                                </Row>
                            )}
                        </Header>
                        <Body>
                            <HorizontalForm spacing={['.75rem', '.5rem']}>
                                {({ FormContainer, FormRow, FormCol }) => (
                                    <FormContainer style={{ width: '100%' }}>
                                        <FormRow>
                                            <FormCol>
                                                <OverflowEllipsis title={i18n._('State')}>
                                                    {i18n._('State')}
                                                </OverflowEllipsis>
                                            </FormCol>
                                            <FormCol style={{ width: '50%' }}>
                                                <Readout>{activeState}</Readout>
                                            </FormCol>
                                        </FormRow>
                                        <FormRow>
                                            <FormCol>
                                                <OverflowEllipsis title={i18n._('Feed Rate')}>
                                                    {i18n._('Feed Rate')}
                                                </OverflowEllipsis>
                                            </FormCol>
                                            <FormCol style={{ width: '50%' }}>
                                                <Readout>{feedrate}</Readout>
                                            </FormCol>
                                        </FormRow>
                                        <FormRow>
                                            <FormCol>
                                                <OverflowEllipsis title={i18n._('Spindle')}>
                                                    {i18n._('Spindle')}
                                                </OverflowEllipsis>
                                            </FormCol>
                                            <FormCol style={{ width: '50%' }}>
                                                <Readout>{spindle}</Readout>
                                            </FormCol>
                                        </FormRow>
                                        <FormRow>
                                            <FormCol>
                                                <OverflowEllipsis title={i18n._('Tool Number')}>
                                                    {i18n._('Tool Number')}
                                                </OverflowEllipsis>
                                            </FormCol>
                                            <FormCol style={{ width: '50%' }}>
                                                <Readout>{tool}</Readout>
                                            </FormCol>
                                        </FormRow>
                                    </FormContainer>
                                )}
                            </HorizontalForm>
                        </Body>
                    </Container>
                );
            }}
        </CollapsibleCard>
    );
};

export default StatusReports;
