/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.24
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V2ContainerResourceMetricStatus } from './v2ContainerResourceMetricStatus';
import { V2ExternalMetricStatus } from './v2ExternalMetricStatus';
import { V2ObjectMetricStatus } from './v2ObjectMetricStatus';
import { V2PodsMetricStatus } from './v2PodsMetricStatus';
import { V2ResourceMetricStatus } from './v2ResourceMetricStatus';

/**
* MetricStatus describes the last-read state of a single metric.
*/
export class V2MetricStatus {
    'containerResource'?: V2ContainerResourceMetricStatus;
    'external'?: V2ExternalMetricStatus;
    'object'?: V2ObjectMetricStatus;
    'pods'?: V2PodsMetricStatus;
    'resource'?: V2ResourceMetricStatus;
    /**
    * type is the type of metric source.  It will be one of \"ContainerResource\", \"External\", \"Object\", \"Pods\" or \"Resource\", each corresponds to a matching field in the object. Note: \"ContainerResource\" type is available on when the feature-gate HPAContainerMetrics is enabled
    */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "containerResource",
            "baseName": "containerResource",
            "type": "V2ContainerResourceMetricStatus"
        },
        {
            "name": "external",
            "baseName": "external",
            "type": "V2ExternalMetricStatus"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "V2ObjectMetricStatus"
        },
        {
            "name": "pods",
            "baseName": "pods",
            "type": "V2PodsMetricStatus"
        },
        {
            "name": "resource",
            "baseName": "resource",
            "type": "V2ResourceMetricStatus"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V2MetricStatus.attributeTypeMap;
    }
}

