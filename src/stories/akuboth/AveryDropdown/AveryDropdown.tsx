import { useEffect, useState, useRef } from 'react'
import styled, { css } from 'styled-components'
import type { AveryDropdownProps } from './AveryDropdown.types'

export default function AveryDropdown({
    disabled=false,
    options={ Example1: 'example1_value', Example2: 'example2_value', ExampleDefault: 'exampleDefault_value', Example4: 'example4_value' },
    defaultOption='ExampleDefault',
    bold=true,
    fontSize=16,
    padding=8,
    borderRadius=5,
    color='#FFFFFF',
    backgroundColor='#8553f8'
}: AveryDropdownProps) 
{
    const Select = styled.select<{ 
        $disabled?: boolean; 
        $backgroundColor?: string;
        $borderRadius?: number;
        $bold?: boolean;
        $color?: string;
        $fontSize?: number;
        $padding?: number;
    }>`
    font-family: sans-serif;
    background-color: ${backgroundColor};
    font-weight: ${bold ? 'bold' : 'normal'};
    color: ${color};
    border-radius: ${borderRadius + 'px'};
    font-size: ${fontSize + 'px'};
    padding: ${padding + 'px'};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    user-select: ${disabled ? 'none' : 'text'};
    /* opacity: ${disabled ? '50%' : '100%'}; */
    filter: ${disabled ? 'grayscale(100%)' : 'none'};
    `

    const Option = styled.option<{ 
        $backgroundColor?: string;
        $bold?: boolean;
        $color?: string;
        $fontSize?: number;
    }>`
    font-family: sans-serif;
    background-color: ${backgroundColor};
    font-weight: ${bold ? 'bold' : 'normal'};
    color: ${color};
    font-size: ${fontSize + 'px'};
    `

    return (
        <Select data-testid="AveryTestID" disabled={disabled} 
        // style=
        // {{
        //     fontFamily: 'sans-serif',
        //     backgroundColor: backgroundColor,
        //     fontWeight: bold ? 'bold' : 'normal',
        //     color: color,
        //     borderRadius: borderRadius + 'px',
        //     fontSize: fontSize + 'px',
        //     padding: padding + 'px',
        //     cursor: disabled ? 'not-allowed' : 'pointer',
        //     userSelect: disabled ? 'none' : 'text',
        //     // opacity: disabled ? '50%' : '100%',
        //     filter: disabled ? 'grayscale(100%)' : 'none'
        // }}
        >
            {Object.keys(options).map(key => 
                (
                    <Option selected={key === defaultOption} key={key} value={options[key]}
                    // style=
                    // {{
                    //     fontFamily: 'sans-serif',
                    //     backgroundColor: backgroundColor,
                    //     fontWeight: bold ? 'bold' : 'normal',
                    //     color: color,
                    //     fontSize: fontSize + 'px',
                    // }} 
                    >
                        {key}
                    </Option>
                ))
            }
            
        </Select>
    )
}
