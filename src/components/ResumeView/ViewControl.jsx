import React from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Select, Tooltip, ColorPicker, Button, message } from 'antd';
import { useStores } from '@/hooks/useStores';

// 字体选择项
const fontFamilyOptions = [
  { value: 'Microsoft YaHei' },
  { value: '黑体' },
  { value: '宋体' },
  { value: '楷体' },
];

const createOptionsArray = (start, end) => {
  const options = [];
  for (let i = start; i <= end; i++) {
    options.push({ value: i });
  }
  return options;
};

// 字号选择项
const fontSizeOptions = createOptionsArray(12, 20);

// 页边距选择项
const paddingOptions = createOptionsArray(5, 25);

// 行距选择项
const lineHeightOptions = createOptionsArray(12, 30);

// 颜色预制项
const colors = ['#f4664a', '#e86452', '#ff9845', '#faad14',
  '#f6bd16', '#5ad8a6', '#30bf78', '#6dc8ec', '#5b8ff9',
  '#446ef6', '#1e9493', '#945fb9', '#ff99c3', '#5d7092'];

const ViewControl = () => {
  const { id } = useParams();
  const { viewControlStore } = useStores();

  const saveTheme = React.useCallback(async () => {
    try {
      const res = await viewControlStore.saveTheme(id);
      message.success(res.message);
    } catch (err) {
      message.error(err.message);
    }
  }, [viewControlStore, id]);

  const resetTheme = React.useCallback(async () => {
    try {
      const res = await viewControlStore.resetTheme(id);
      message.success(res.message);
    } catch (err) {
      message.error(err.message);
    }
  }, [viewControlStore, id]);

  return (
    <div className="flex gap-2">
      <Tooltip title="字体">
        <Select
          value={viewControlStore.state.fontFamily}
          style={{ width: 100 }}
          onChange={viewControlStore.setFontFamily}
          options={fontFamilyOptions}
        />
      </Tooltip>
      <Tooltip title="字号">
        <Select
          value={viewControlStore.state.fontSize}
          style={{ width: 80 }}
          onChange={viewControlStore.setFontSize}
          options={fontSizeOptions}
        />
      </Tooltip>
      <Tooltip title="页边距">
        <Select
          value={viewControlStore.state.padding}
          style={{ width: 80 }}
          onChange={viewControlStore.setPadding}
          options={paddingOptions}
        />
      </Tooltip>
      <Tooltip title="行距">
        <Select
          value={viewControlStore.state.lineHeight}
          style={{ width: 80 }}
          onChange={viewControlStore.setLineHeight}
          options={lineHeightOptions}
        />
      </Tooltip>
      <Tooltip title="主题">
        <ColorPicker
          value={viewControlStore.state.color}
          onChange={(value) => viewControlStore.setColor(value.metaColor.originalInput)}
          presets={[{ label: '', colors }]}
        />
      </Tooltip>
      <Button
        onClick={saveTheme}
        className="text-white bg-[#446ef6] hover:!text-white hover:!bg-[#446ef6]"
      >
        保存配置
      </Button>
      <Button onClick={resetTheme}>重置</Button>
    </div>
  )
};

export default React.memo(observer(ViewControl));
