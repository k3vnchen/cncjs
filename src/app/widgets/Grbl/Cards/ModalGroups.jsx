import ensureArray from 'ensure-array';
import React, { useContext } from 'react';
import i18n from 'app/lib/i18n';
import CollapsibleCard from 'app/components/CollapsibleCard';
import { Container, Row, Col } from 'app/components/GridSystem';
import HorizontalForm from 'app/components/HorizontalForm';
import { WidgetConfigContext } from 'app/widgets/context';
import OverflowEllipsis from './OverflowEllipsis';
import Readout from './Readout';

const none = '–';

const ModalGroups = ({
    modal,
}) => {
    const config = useContext(WidgetConfigContext);
    const expanded = config.get('panel.modalGroups.expanded');
    const collapsed = !expanded;

    return (
        <CollapsibleCard
            easing="ease-out"
            collapsed={collapsed}
        >
            {({ collapsed, ToggleIcon, Header, Body }) => {
                const expanded = !collapsed;
                config.set('panel.modalGroups.expanded', expanded);

                return (
                    <Container fluid style={{ width: '100%' }}>
                        <Header>
                            {({ hovered }) => (
                                <Row>
                                    <Col>{i18n._('Modal Groups')}</Col>
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
                                                <OverflowEllipsis title={i18n._('Motion')}>
                                                    {i18n._('Motion')}
                                                </OverflowEllipsis>
                                            </FormCol>
                                            <FormCol style={{ width: '50%' }}>
                                                <Readout>{modal.motion || none}</Readout>
                                            </FormCol>
                                        </FormRow>
                                        <FormRow>
                                            <FormCol>
                                                <OverflowEllipsis title={i18n._('Coordinate')}>
                                                    {i18n._('Coordinate')}
                                                </OverflowEllipsis>
                                            </FormCol>
                                            <FormCol style={{ width: '50%' }}>
                                                <Readout>{modal.wcs || none}</Readout>
                                            </FormCol>
                                        </FormRow>
                                        <FormRow>
                                            <FormCol>
                                                <OverflowEllipsis title={i18n._('Plane')}>
                                                    {i18n._('Plane')}
                                                </OverflowEllipsis>
                                            </FormCol>
                                            <FormCol style={{ width: '50%' }}>
                                                <Readout>{modal.plane || none}</Readout>
                                            </FormCol>
                                        </FormRow>
                                        <FormRow>
                                            <FormCol>
                                                <OverflowEllipsis title={i18n._('Distance')}>
                                                    {i18n._('Distance')}
                                                </OverflowEllipsis>
                                            </FormCol>
                                            <FormCol style={{ width: '50%' }}>
                                                <Readout>{modal.distance || none}</Readout>
                                            </FormCol>
                                        </FormRow>
                                        <FormRow>
                                            <FormCol>
                                                <OverflowEllipsis title={i18n._('Feed Rate')}>
                                                    {i18n._('Feed Rate')}
                                                </OverflowEllipsis>
                                            </FormCol>
                                            <FormCol style={{ width: '50%' }}>
                                                <Readout>{modal.feedrate || none}</Readout>
                                            </FormCol>
                                        </FormRow>
                                        <FormRow>
                                            <FormCol>
                                                <OverflowEllipsis title={i18n._('Units')}>
                                                    {i18n._('Units')}
                                                </OverflowEllipsis>
                                            </FormCol>
                                            <FormCol style={{ width: '50%' }}>
                                                <Readout>{modal.units || none}</Readout>
                                            </FormCol>
                                        </FormRow>
                                        <FormRow>
                                            <FormCol>
                                                <OverflowEllipsis title={i18n._('Program')}>
                                                    {i18n._('Program')}
                                                </OverflowEllipsis>
                                            </FormCol>
                                            <FormCol style={{ width: '50%' }}>
                                                <Readout>{modal.program || none}</Readout>
                                            </FormCol>
                                        </FormRow>
                                        <FormRow>
                                            <FormCol>
                                                <OverflowEllipsis title={i18n._('Spindle')}>
                                                    {i18n._('Spindle')}
                                                </OverflowEllipsis>
                                            </FormCol>
                                            <FormCol style={{ width: '50%' }}>
                                                <Readout>{modal.spindle || none}</Readout>
                                            </FormCol>
                                        </FormRow>
                                        <FormRow>
                                            <FormCol>
                                                <OverflowEllipsis title={i18n._('Coolant')}>
                                                    {i18n._('Coolant')}
                                                </OverflowEllipsis>
                                            </FormCol>
                                            <FormCol style={{ width: '50%' }}>
                                                <Readout>
                                                    {ensureArray(modal.coolant).map(coolant => (
                                                        <div title={coolant} key={coolant}>{coolant || none}</div>
                                                    ))}
                                                </Readout>
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

export default ModalGroups;
