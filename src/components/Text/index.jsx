import React from 'react'
import Style from './styled'

const Light = ({ children, uppercase, className }) => (
  <Style.Light uppercase={uppercase} className={className} >{children}</Style.Light>
)

const Medium = ({ children, uppercase, className }) => (
  <Style.Medium uppercase={uppercase} className={className} >{children}</Style.Medium>
)

const Darken = ({ children, uppercase, className }) => (
  <Style.Darken uppercase={uppercase} className={className} >{children}</Style.Darken>
)

const Text = {}
Text.Light = Light
Text.Medium = Medium
Text.Darken = Darken

export default Text
