// src/pages/Settings.jsx

import React from 'react';
import { settings } from '../data/mockData';

function Settings() {
  return (
    <div>
      <h2>Settings</h2>
      <p><strong>App Name:</strong> {settings.appName}</p>
      <p><strong>Version:</strong> {settings.version}</p>
    </div>
  );
}

export default Settings;
