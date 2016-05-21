/*
 * File: app/view/TicketView.js
 *
 * This file was generated by Sencha Architect version 3.5.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TicketTracker.view.TicketView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.ticketview',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Slider',
        'Ext.field.Select',
        'Ext.field.TextArea',
        'Ext.Button'
    ],

    config: {
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'textfield',
                        id: 'titleField',
                        label: 'Title',
                        labelAlign: 'top',
                        required: true,
                        placeHolder: 'Save the world'
                    },
                    {
                        xtype: 'sliderfield',
                        id: 'importanceField',
                        label: 'Importance',
                        labelAlign: 'top',
                        required: true,
                        value: [
                            3
                        ],
                        maxValue: 5,
                        minValue: 1
                    },
                    {
                        xtype: 'selectfield',
                        id: 'statusField',
                        label: 'Status',
                        labelAlign: 'top',
                        required: true,
                        options: [
                            {
                                text: 'Open',
                                value: 'Open'
                            },
                            {
                                text: 'In Progress',
                                value: 'In Progress'
                            },
                            {
                                text: 'Completed',
                                value: 'Completed'
                            }
                        ],
                        usePicker: true
                    },
                    {
                        xtype: 'textareafield',
                        id: 'descriptionField',
                        label: 'Description',
                        labelAlign: 'top'
                    },
                    {
                        xtype: 'button',
                        id: 'saveTicketButton',
                        margin: 10,
                        ui: 'action',
                        text: 'Save'
                    }
                ]
            }
        ]
    }

});