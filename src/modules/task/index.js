/*
 * 	This file is part of ELCube.
 *	ELCube is free software: you can redistribute it and/or modify
 *	it under the terms of the GNU Affero General Public License as published by
 *	the Free Software Foundation, either version 3 of the License, or
 *	(at your option) any later version.
 *	ELCube is distributed in the hope that it will be useful,
 *	but WITHOUT ANY WARRANTY; without even the implied warranty of
 *	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *	GNU Affero General Public License for more details.
 *	You should have received a copy of the GNU Affero General Public License
 *	along with ELCube.  If not, see <https://www.gnu.org/licenses/>.
 */
import NkPageTasks from "@/modules/task/pages/NkPageTasks";
import NkDefBpmDeployments from "@/modules/task/pages/NkDefBpmDeployments";
import NkDefBpmProcessDefinitions from "@/modules/task/pages/NkDefBpmProcessDefinitions";
import NkDefBpmProcessDefinitionDetail from "@/modules/task/pages/NkDefBpmProcessDefinitionDetail";
import NkDefBpmDesigner from "@/modules/task/pages/NkDefBpmDesigner";
import NkDefDmnDefinitions from "@/modules/task/pages/NkDefDmnDefinitions";
import NkDefDmnDefinitionDetail from "@/modules/task/pages/NkDefDmnDefinitionDetail";
import NkDefDmnDesigner from "@/modules/task/pages/NkDefDmnDesigner";
import NkPageProcessInstances from "@/modules/task/pages/NkPageProcessInstances";
import NkPageProcessDetail from "@/modules/task/pages/NkPageProcessDetail";


const routes = [
    {
        name: "任务",
        path: 'tasks',
        component: NkPageTasks,
    },
    {
        name: "流程部署记录",
        path: 'def/bpm/process/deployments',
        component: NkDefBpmDeployments
    },
    {
        name: "流程定义",
        path: 'def/bpm/process/definitions',
        component: NkDefBpmProcessDefinitions,
        children: [
            {
                name: "流程定义详情",
                path: 'detail/:id',
                component: NkDefBpmProcessDefinitionDetail
            },
            {
                name: "流程设计器",
                path: 'designer',
                component: NkDefBpmDesigner,
                meta:{
                    title: "工作流设计器",
                }
            },
        ]
    },
    {
        name: "决策定义",
        path: 'def/dmn/definitions',
        component: NkDefDmnDefinitions,
        children: [
            {
                name: "决策定义详情",
                path: 'detail/:id',
                component: NkDefDmnDefinitionDetail
            },
            {
                name: "决策设计器",
                path: 'designer',
                component: NkDefDmnDesigner,
                meta:{
                    title: "决策设计器",
                }
            },
        ]
    },
    {
        name: "流程实例",
        path: 'devops/process/instances',
        component: NkPageProcessInstances,
        meta:{
            title: "流程实例",
        },
        children: [
            {
                name: "流程实例详情",
                path: 'detail/:id',
                component: NkPageProcessDetail
            },
        ]
    },
]

export default {
    routes
}